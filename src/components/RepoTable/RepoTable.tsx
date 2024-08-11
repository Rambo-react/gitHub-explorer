import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

interface RepoTableProps {
  repositories?: typeof mokArray
}

const tableHeadNames = [
  'Название',
  'Язык',
  'Число форков',
  'Число Звезд',
  'Дата обновления',
]

const mokArray = [
  {
    id: 1,
    name: '111',
    language: 'java',
    forkCount: 5,
    starsCount: 3,
    updateDate: new Date().toLocaleDateString('de-DE'),
  },
  {
    id: 2,
    name: '222',
    language: 'java',
    forkCount: 5,
    starsCount: 2,
    updateDate: new Date().toLocaleDateString('de-DE'),
  },
  {
    id: 3,
    name: '333',
    language: 'java',
    forkCount: 4,
    starsCount: 6,
    updateDate: new Date().toLocaleDateString('de-DE'),
  },
]
export const RepoTable: React.FC<RepoTableProps> = ({
  repositories = mokArray,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeadNames.map((name) => (
            <TableCell>{`${name}`}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {repositories.map((repo) => (
          <TableRow
            key={repo.id}
            onClick={() => console.log(`selected repo:${repo}`)}
          >
            <TableCell>{repo.name}</TableCell>
            <TableCell>{repo.language}</TableCell>
            <TableCell>{repo.forkCount}</TableCell>
            <TableCell>{repo.starsCount}</TableCell>
            <TableCell>{repo.updateDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
