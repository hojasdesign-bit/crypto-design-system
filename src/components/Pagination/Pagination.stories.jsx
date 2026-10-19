import React from 'react';
import { Pagination } from './Pagination.jsx';

export default {
  title: 'Superficies/Pagination',
  component: Pagination,
};

export const Interactiva = {
  render: () => {
    const [page, setPage] = React.useState(1);
    return <Pagination page={page} totalPages={5} onChange={setPage} />;
  },
};

export const MuchasPaginas = {
  render: () => {
    const [page, setPage] = React.useState(8);
    return <Pagination page={page} totalPages={24} onChange={setPage} />;
  },
};

export const AlFinal = {
  args: { page: 10, totalPages: 10, onChange: () => {} },
};
