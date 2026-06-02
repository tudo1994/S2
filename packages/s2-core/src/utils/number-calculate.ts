import Decimal from 'decimal.js';
import { Aggregation, type ViewMetaData } from '../common/interface';
import { CellData } from '../data-set/cell-data';

export const isNotNumber = (value: unknown) => {
  if (typeof value === 'number') {
    return Number.isNaN(value);
  }

  if (!value) {
    return true;
  }

  if (typeof value === 'string') {
    return Number.isNaN(Number(value));
  }

  return true;
};

export const canConvertToNumber = (a?: string | number) => !isNotNumber(a);

/**
 * 计算数据项的和
 * @param data 数据项
 * @param field 值字段
 * @returns 算术和
 */
export const getDataSumByField = (
  data: ViewMetaData[],
  field: string,
): number => {
  if (!data?.length) {
    return 0;
  }

  let sum = new Decimal(0);

  for (let i = 0; i < data.length; i++) {
    const fieldValue = CellData.getFieldValue(data[i], field) as
      | string
      | number;
    const notNumber = isNotNumber(fieldValue);
    const val = notNumber ? 0 : fieldValue;

    sum = sum.plus(val);
  }

  return sum.toNumber();
};

/**
 * 计算数据项的极值
 * @param method 最大值(max)或最小值(min)
 * @param data 数据项
 * @param field 值字段
 * @returns 最值
 */
export const getDataExtremumByField = (
  method: 'min' | 'max',
  data: ViewMetaData[],
  field: string,
): number | undefined => {
  if (!data?.length) {
    return;
  }

  let extremum: Decimal | undefined;

  for (let i = 0; i < data.length; i++) {
    const fieldValue = CellData.getFieldValue(data[i], field) as
      | string
      | number;
    const notNumber = isNotNumber(fieldValue);

    // 防止预处理时默认值 0 影响极值结果，处理时需过滤非法值
    if (!notNumber) {
      const val = new Decimal(fieldValue);

      if (extremum === undefined) {
        extremum = val;
      } else if (method === 'max') {
        if (val.greaterThan(extremum)) {
          extremum = val;
        }
      } else if (method === 'min') {
        if (val.lessThan(extremum)) {
          extremum = val;
        }
      }
    }
  }

  return extremum?.toNumber();
};

/**
 * 计算数据项的平均值
 * @param data 数据项
 * @param field 值字段
 * @returns 算术平均值
 */
export const getDataAvgByField = (
  data: ViewMetaData[],
  field: string,
): number => {
  if (!data?.length) {
    return 0;
  }

  let sum = new Decimal(0);
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    const fieldValue = CellData.getFieldValue(data[i], field) as
      | string
      | number;
    const notNumber = isNotNumber(fieldValue);
    const val = notNumber ? 0 : fieldValue;

    sum = sum.plus(val);
    count++;
  }

  if (count === 0) {
    return 0;
  }

  return sum.dividedBy(count).toNumber();
};

/**
 *
 * @param data
 */
export const getDataCountByField = (data: ViewMetaData[]): number => {
  return data?.length || 0;
};

/**
 * totals 计算方法集合
 */
export const calcActionByType: {
  [type in Aggregation]: (
    data: ViewMetaData[],
    field: string,
  ) => number | undefined;
} = {
  [Aggregation.SUM]: getDataSumByField,
  [Aggregation.MIN]: (data, field) =>
    getDataExtremumByField('min', data, field),
  [Aggregation.MAX]: (data, field) =>
    getDataExtremumByField('max', data, field),
  [Aggregation.AVG]: getDataAvgByField,
  [Aggregation.COUNT]: getDataCountByField,
};
