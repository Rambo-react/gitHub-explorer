import React, { useState } from 'react'
import {
  DataGrid,
  GridPaginationModel,
  GridRowSelectionModel,
} from '@mui/x-data-grid'
import { setSelectedRepo } from '../../redux/slices/repoSlice'
import { COLUMNS } from './Columns'
import { useDispatch, useSelector } from 'react-redux'
import { useGetRepositories } from '../../hooks/useGetRepositories'
import { RootState } from '../../redux/store'
import { Typography } from '@mui/material'
import { QueryOptions } from './types'

export const RepoTable: React.FC = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state: RootState) => state.repos.searchTerm)
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  })

  const [queryOptions, setQueryOptions] = useState<QueryOptions>({
    first: paginationModel.pageSize,
    after: null,
    last: null,
    before: null,
  })

  // Hook for receiving data
  const { loading, error, data, repositoryCount, pageInfo } =
    useGetRepositories({ ...queryOptions, searchText: searchTerm })

  // If rowCount becomes undefined during loading, the page will be reset to zero. Solution from the documentation to avoid this problem.
  const rowCountRef = React.useRef(repositoryCount || 0)

  const rowCount = React.useMemo(() => {
    if (repositoryCount !== undefined) {
      rowCountRef.current = repositoryCount
    }
    return rowCountRef.current
  }, [repositoryCount])

  // Page change function
  const handlePaginationModelChange = (model: {
    page: number
    pageSize: number
  }) => {
    // Changing page size
    if (model.pageSize !== paginationModel.pageSize) {
      setPaginationModel({ page: 0, pageSize: model.pageSize })
      setQueryOptions({
        first: model.pageSize,
        after: null,
        last: null,
        before: null,
      })
    }

    // Changing page number
    const newPage = model.page

    if (newPage > paginationModel.page && pageInfo.hasNextPage) {
      setQueryOptions({
        first: paginationModel.pageSize,
        after: pageInfo.endCursor,
        last: null,
        before: null,
      })
      setPaginationModel({ ...paginationModel, page: newPage })
    } else if (newPage < paginationModel.page && pageInfo.hasPreviousPage) {
      setQueryOptions({
        last: paginationModel.pageSize,
        before: pageInfo.startCursor,
        first: null,
        after: null,
      })
      setPaginationModel({ ...paginationModel, page: newPage })
    }
  }

  // Row selection function
  const handleChangeSelectedRow = (selectedRows: GridRowSelectionModel) => {
    const selectedId = selectedRows[0]
    const selectedRepo = data?.find((repo) => repo.id === selectedId)
    dispatch(setSelectedRepo(selectedRepo || null))
  }

  if (error) {
    return <Typography color='error'>Ошибка: {error.message}</Typography>
  }

  return (
    <DataGrid
      sx={{ border: 'none' }}
      rows={data}
      columns={COLUMNS}
      loading={loading}
      disableColumnMenu={true}
      onRowSelectionModelChange={handleChangeSelectedRow}
      rowCount={rowCount}
      pagination
      paginationMode='server'
      paginationModel={paginationModel}
      onPaginationModelChange={(model) => handlePaginationModelChange(model)}
      pageSizeOptions={[5, 10, 15]}
      disableColumnSelector
      initialState={{
        columns: {
          columnVisibilityModel: {
            id: false,
          },
        },
        sorting: {
          sortModel: [{ field: 'name', sort: 'asc' }],
        },
      }}
    />
  )
}
