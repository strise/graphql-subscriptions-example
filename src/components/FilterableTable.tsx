import React from 'react'
import { Input, Table, TableProps } from 'antd'
import { filterObjects } from '../utils/object'

export const FilterableTable = <T extends { id: string }>({ data, columns }: { data: T[] } & TableProps<T>) => {
  const [filter, setFilter] = React.useState('')

  const filtered = filterObjects(data, filter)
  return (
    <>
      <Input.Search value={filter} onChange={(e) => setFilter(e.target.value.toLowerCase())} placeholder='Filter ...' />
      <Table rowKey={(t) => t.id} columns={columns} dataSource={filtered} />
    </>
  )
}
