import { ActionName, TableName, Icon } from '@/constants/globals'
import { slugify } from '@/utils/common'

export const TableHelper = {
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
      [slugify(ActionName.REPORT)]: ActionName.REPORT,
    }[actionSlug]
  },

  getIconFromTableName(tableName: TableName): Icon {
    return {
      [TableName.SETTINGS]: Icon.SETTINGS,
      [TableName.LOGS]: Icon.LOGS,
      [TableName.EXAMPLES]: Icon.EXAMPLES,
      [TableName.EXAMPLE_RECORDS]: Icon.RECORDS,
      [TableName.TESTS]: Icon.TESTS,
      [TableName.TEST_RECORDS]: Icon.RECORDS,
    }[tableName]
  },
}