import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

interface RepoTableProps {
  repositories?: any[]
}

const tableHeadNames = [
  'Название',
  'Язык',
  'Число форков',
  'Число Звезд',
  'Дата обновления',
]

export const RepoTable: React.FC<RepoTableProps> = ({ repositories }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeadNames.map((name, index) => (
            <TableCell key={index}>{`${name}`}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {repositories.map((repo) => (
          <TableRow key={repo.node.id} onClick={() => console.log(repo)}>
            <TableCell>{repo.node.name}</TableCell>
            <TableCell>{repo.node.primaryLanguage?.name}</TableCell>
            <TableCell>{repo.node.forkCount}</TableCell>
            <TableCell>{repo.node.stargazerCount}</TableCell>
            <TableCell>
              {new Date(repo.node.updatedAt).toLocaleDateString('de-DE')}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
