import { of } from 'rxjs';
import { filterNumber } from './filter-number';

describe('filterNumber', () => {
  it('filters out null values and keeps numbers', () => {
    const result: number[] = [];

    of(1, null, 0, 42)
      .pipe(filterNumber())
      .subscribe((value) => result.push(value));

    expect(result).toEqual([1, 0, 42]);
  });
});
