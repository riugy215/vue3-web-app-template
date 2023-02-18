import type { ColumnProps, ParentTable, RecordTable } from '@/constants/types'
import { ActionName, TableName, Icon, Field } from '@/constants/globals'
import { slugify } from '@/utils/common'

const TableUtils = {
  getFields(tableName: TableName): Field[] {
    return {
      [TableName.SETTINGS]: [Field.KEY, Field.VALUE],
      [TableName.LOGS]: [
        Field.AUTO_ID,
        Field.TIMESTAMP,
        Field.SEVERITY,
        Field.LABEL,
        Field.DETAILS,
      ],
      [TableName.EXAMPLES]: [
        Field.ID,
        Field.CREATED_TIMESTAMP,
        Field.NAME,
        Field.DESCRIPTION,
        Field.PARENT_STATUS,
        Field.FAVORITE,
        Field.EXAMPLE_MESSAGE,
      ],
      [TableName.EXAMPLE_RECORDS]: [
        Field.ID,
        Field.CREATED_TIMESTAMP,
        Field.PARENT_ID,
        Field.RECORD_STATUS,
        Field.NOTE,
        Field.EXAMPLE_NUMBER,
      ],
      [TableName.TESTS]: [
        Field.ID,
        Field.CREATED_TIMESTAMP,
        Field.NAME,
        Field.DESCRIPTION,
        Field.PARENT_STATUS,
        Field.FAVORITE,
        Field.EXAMPLE_MESSAGE,
      ],
      [TableName.TEST_RECORDS]: [
        Field.ID,
        Field.CREATED_TIMESTAMP,
        Field.PARENT_ID,
        Field.RECORD_STATUS,
        Field.NOTE,
        Field.EXAMPLE_NUMBER,
      ],
    }[tableName]
  },

  getComponents(tableName: TableName): any[] {
    return {
      [TableName.SETTINGS]: [],
      [TableName.LOGS]: [],
      [TableName.EXAMPLES]: [],
      [TableName.EXAMPLE_RECORDS]: [],
      [TableName.TESTS]: [],
      [TableName.TEST_RECORDS]: [],
    }[tableName]
  },

  getColumns(tableName: TableName): ColumnProps[] {
    return {
      [TableName.SETTINGS]: [],
      [TableName.LOGS]: [],
      [TableName.EXAMPLES]: [],
      [TableName.EXAMPLE_RECORDS]: [],
      [TableName.TESTS]: [],
      [TableName.TEST_RECORDS]: [],
    }[tableName]
  },

  getVisibleColumns(tableName: TableName): Field[] {
    return {
      [TableName.SETTINGS]: [],
      [TableName.LOGS]: [],
      [TableName.EXAMPLES]: [],
      [TableName.EXAMPLE_RECORDS]: [],
      [TableName.TESTS]: [],
      [TableName.TEST_RECORDS]: [],
    }[tableName]
  },

  getSupportedActions(tableName: TableName): ActionName[] {
    return {
      [TableName.SETTINGS]: [],
      [TableName.LOGS]: [],
      [TableName.EXAMPLES]: [],
      [TableName.EXAMPLE_RECORDS]: [],
      [TableName.TESTS]: [],
      [TableName.TEST_RECORDS]: [],
    }[tableName]
  },

  getParentTable(recordTable: RecordTable): ParentTable {
    return {
      [TableName.EXAMPLE_RECORDS]: TableName.EXAMPLES,
      [TableName.TEST_RECORDS]: TableName.TESTS,
    }[recordTable] as ParentTable
  },

  getRecordTable(parentTable: ParentTable): RecordTable {
    return {
      [TableName.EXAMPLES]: TableName.EXAMPLE_RECORDS,
      [TableName.TESTS]: TableName.TEST_RECORDS,
    }[parentTable] as RecordTable
  },

  getLabelSingular(tableName: TableName): string {
    return {
      [TableName.SETTINGS]: 'Setting',
      [TableName.LOGS]: 'Logs',
      [TableName.EXAMPLES]: 'Example',
      [TableName.EXAMPLE_RECORDS]: 'Example Record',
      [TableName.TESTS]: 'Test',
      [TableName.TEST_RECORDS]: 'Test Record',
    }[tableName]
  },

  getTableIcon(tableName: TableName): Icon {
    return {
      [TableName.SETTINGS]: Icon.SETTINGS,
      [TableName.LOGS]: Icon.LOGS,
      [TableName.EXAMPLES]: Icon.EXAMPLES,
      [TableName.EXAMPLE_RECORDS]: Icon.RECORDS,
      [TableName.TESTS]: Icon.TESTS,
      [TableName.TEST_RECORDS]: Icon.RECORDS,
    }[tableName]
  },

  getTableNameFromSlug(tableSlug: string): TableName {
    return {
      [slugify(TableName.SETTINGS)]: TableName.SETTINGS,
      [slugify(TableName.LOGS)]: TableName.LOGS,
      [slugify(TableName.EXAMPLES)]: TableName.EXAMPLES,
      [slugify(TableName.EXAMPLE_RECORDS)]: TableName.EXAMPLE_RECORDS,
      [slugify(TableName.TESTS)]: TableName.TESTS,
      [slugify(TableName.TEST_RECORDS)]: TableName.TEST_RECORDS,
    }[tableSlug]
  },

  getActionNameFromSlug(actionSlug: string): ActionName {
    return {
      [slugify(ActionName.NONE)]: ActionName.NONE,
      [slugify(ActionName.CREATE)]: ActionName.CREATE,
      [slugify(ActionName.INSPECT)]: ActionName.INSPECT,
      [slugify(ActionName.EDIT)]: ActionName.EDIT,
      [slugify(ActionName.DELETE)]: ActionName.DELETE,
      [slugify(ActionName.CLEAR)]: ActionName.CLEAR,
      [slugify(ActionName.CHARTS)]: ActionName.CHARTS,
    }[actionSlug]
  },

  getActionIcon(action: ActionName): Icon {
    return {
      [ActionName.NONE]: Icon.NONE,
      [ActionName.CREATE]: Icon.CREATE,
      [ActionName.INSPECT]: Icon.INSPECT,
      [ActionName.EDIT]: Icon.EDIT,
      [ActionName.DELETE]: Icon.DELETE,
      [ActionName.CLEAR]: Icon.CLEAR,
      [ActionName.CHARTS]: Icon.CHARTS,
    }[action]
  },
}

export default TableUtils