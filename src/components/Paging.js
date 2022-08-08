import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';

function Paging({ setPage, numOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      mt={10}
    >
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numOfPages}
        hideNextButton
        hidePrevButton
        color="primary"
      />
    </Stack>
  )
}

export default Paging;