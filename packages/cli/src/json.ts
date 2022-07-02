import utils from '@c3/utils';
import type { PropertyPath } from 'lodash';
import _ from 'lodash';
import { parse } from 'path';
import { $, fs } from 'zx';
const { isPlainObject, isArray, toArray } = utils;

export class Json {
  private _data: object;
  private _file: string;
  constructor(file: string) {
    this._file = file;
    this._data = fs.readJsonSync(file, { encoding: 'utf-8' });
  }

  set(path: PropertyPath, value: unknown) {
    _.set(this._data, path, value);
    this.save();
    return this;
  }
  /**
   * jest:{
   *  a:1
   * }
   * @param path
   * @param value
   */
  append(path: PropertyPath, value: unknown) {
    let data = this.get(path);
    if (isArray(data)) {
      data.push(...toArray(value));
    } else if (isPlainObject(data) && isPlainObject(value)) {
      data = { ...data, ...value };
    } else {
      throw new Error('not supported type');
    }
    this.set(path, data);
  }
  get(path: PropertyPath) {
    return _.get(this._data, path);
  }
  save() {
    fs.writeFileSync(this._file, JSON.stringify(this._data), {
      encoding: 'utf-8',
    });
    return this;
  }
  get file() {
    return this._file;
  }
  get data() {
    return this._data;
  }
}

interface JSONField {
  file: string;
  path: PropertyPath;
}

export const copyJsonField = async (src: JSONField, desc: JSONField) => {
  let srcName = src.file;
  const isHttpFile = /^https?:/.test(src.file);
  if (isHttpFile) {
    srcName = parse(srcName).name;
    await $`wget ${src.file} -O ${srcName}`;
  }
  new Json(desc.file).set(desc.path, new Json(srcName).get(src.path)).save();
  if (isHttpFile) {
    await $`rm ${srcName}`;
  }
};
