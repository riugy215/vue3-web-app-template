import type { IndexableType } from 'dexie'
import { TableName } from '@/constants/globals'
import { dexieWrapper } from '@/services/DexieWrapper'
import type { IDBExample, IDBExampleRecord, IDBTest, IDBTestRecord } from '@/models/models'

/**
 * Remove this when building your own app
 */
export default function useDBExamples() {
  /**
   * Adds an Example to the database.
   * @param example
   * @returns
   */
  async function addExample(example: IDBExample): Promise<IndexableType> {
    return await dexieWrapper.table(TableName.EXAMPLES).add(example)
  }

  /**
   * Adds an Example Record to the database.
   * @param exampleRecord
   * @returns
   */
  async function addExampleRecord(exampleRecord: IDBExampleRecord): Promise<IndexableType> {
    return await dexieWrapper.table(TableName.EXAMPLE_RECORDS).add(exampleRecord)
  }
  /**
   * Adds a Test to the database.
   * @param test
   * @returns
   */
  async function addTest(test: IDBTest): Promise<IndexableType> {
    return await dexieWrapper.table(TableName.TESTS).add(test)
  }

  /**
   * Adds a Test Record to the database.
   * @param testRecord
   * @returns
   */
  async function addTestRecord(testRecord: IDBTestRecord): Promise<IndexableType> {
    return await dexieWrapper.table(TableName.TESTS_RECORDS).add(testRecord)
  }

  return { addExample, addExampleRecord, addTest, addTestRecord }
}
