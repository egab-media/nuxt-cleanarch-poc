import { ok, Result, err, combine } from '../Result'

describe('Result.Ok', () => {
  test('should create an Ok value', () => {
    const okVal = ok(12)

    expect(okVal.isOk()).toBe(true)
    expect(okVal.isErr()).toBe(false)
  })

  test('should create an Ok value with null', () => {
    const okVal = ok(null)

    expect(okVal.isOk()).toBe(true)
    expect(okVal.isErr()).toBe(false)
  })

  test('should create an Ok value with undefined', () => {
    const okVal = ok(undefined)

    expect(okVal.isOk()).toBe(true)
    expect(okVal.isErr()).toBe(false)
  })

  test('should map over an ok value', () => {
    const okVal = ok(12)
    const mapFn = jest.fn(Number => Number.toString())

    const mapped = okVal.map(mapFn)

    expect(mapped.isOk()).toBe(true)
    expect(mapFn).toHaveBeenCalledTimes(1)
    expect(mapFn).toHaveBeenCalledWith(12)
  })

  test('should fold on Ok', () => {
    const okFolder = jest.fn(_val => 'weeeee')
    const errFolder = jest.fn(_val => 'wooooo')

    const folded = ok(12).fold(okFolder, errFolder)
    expect(folded).toBe('weeeee')
    expect(okFolder).toHaveBeenCalledTimes(1)
    expect(okFolder).toHaveBeenCalledWith(12)
    expect(errFolder).not.toHaveBeenCalledWith(12)
  })

  test('should read value after narrowing', () => {
    const fillable: () => Result<string, number> = () => ok('safe to read')
    const val = fillable()

    // After this check we val is narrowed to Ok<string, number>. Without this
    // line TypeScript will not allow accessing val.value.
    if (val.isErr()) { return }
    expect(val.value).toBe('safe to read')
  })
})

describe('Result.Err', () => {
  test('should create an Error value', () => {
    const errVal = err('errored value')
    expect(errVal.isOk()).toBe(false)
    expect(errVal.isErr()).toBe(true)
  })

  test('should skip map', () => {
    const errVal = err('errored value')
    const mapper = jest.fn(_value => 'noooo')

    const hopefullyNotMapped = errVal.map(mapper)
    expect(hopefullyNotMapped.isErr()).toBe(true)
    expect(mapper).not.toHaveBeenCalled()
  })

  test('should map over an error', () => {
    const errVal = err('errored value')
    const mapper = jest.fn((error: string) => error.replace('1', '2'))
    const mapped = errVal.mapErr(mapper)

    expect(mapped.isErr()).toBe(true)
    expect(mapper).toHaveBeenCalledTimes(1)
    expect(mapper).toHaveBeenCalledWith('errored value')
  })

  test('should fold on an Err', () => {
    const okFolder = jest.fn(_val => 'weeeee')
    const errFolder = jest.fn(_val => 'wooooo')
    const folded = err(12).fold(okFolder, errFolder)

    expect(folded).toBe('wooooo')
    expect(okFolder).not.toHaveBeenCalled()
    expect(errFolder).toHaveBeenCalledTimes(1)
    expect(errFolder).toHaveBeenCalledWith(12)
  })
})

describe('combine', () => {
  test('should create an empty list from empty list', () => {
    const combination = combine([])
    expect(combination.isOk()).toBe(true)

    // After this check we val is narrowed to Ok<string, number>. Without this
    // line TypeScript will not allow accessing val.value.
    if (combination.isErr()) { return }

    expect(combination.value).toStrictEqual([])
  })

  test('should create a list of values from a list of valid results', () => {
    const okValList = [ok(12), ok(13), ok(14)]
    const combination = combine(okValList)
    expect(combination.isOk()).toBe(true)

    // After this check we val is narrowed to Ok<string, number>. Without this
    // line TypeScript will not allow accessing val.value.
    if (combination.isErr()) { return }

    expect(combination.value).toStrictEqual([12, 13, 14])
  })

  test('should create an error from a list of invalid results', () => {
    const okValList = [err(12), err(13), ok(14)]
    const combination = combine(okValList)
    expect(combination.isErr()).toBe(true)

    // After this check we val is narrowed to Ok<string, number>. Without this
    // line TypeScript will not allow accessing val.value.
    if (combination.isOk()) { return }

    expect(combination.error).toStrictEqual(12)
  })
})
