import { GridColDef } from '@mui/x-data-grid'

export const COLUMNS: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Название', flex: 1 },
  { field: 'primaryLanguage', headerName: 'Язык', sortable: false, flex: 1 },
  { field: 'forkCount', headerName: 'Число форков', type: 'number', flex: 1 },
  {
    field: 'stargazerCount',
    headerName: 'Число звезд',
    type: 'number',
    flex: 1,
  },
  {
    field: 'updatedAt',
    headerName: 'Дата обновления',
    type: 'string',
    flex: 1,
  },
]
