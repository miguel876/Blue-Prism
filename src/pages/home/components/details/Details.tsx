import React, { useContext, useMemo, useState } from 'react'
import { CenterWrapper, Item, StyledWrapper } from './details.styles';
import { CircularProgress, Grid, SelectChangeEvent, Typography } from '@mui/material';
import Context from 'context';
import { useTranslation } from 'react-i18next';
import useQuery from 'hooks/useQuery';
import Select from 'components/select';
import { DetailPropType, FilterTypes } from './details.types';

const selectValues = [
  {
    value: '',
    label: 'None'
  },
  {
    value: 'asc',
    label: 'Recent'
  },
  {
    value: 'desc',
    label: 'Old'
  }
];

const Details = () => {
  const { t } = useTranslation();
  const { logId } = useContext(Context);
  const [ filter, setFilter ] = useState<FilterTypes>(null);
  const { data, isError, isLoading } = useQuery<DetailPropType>(`scheduleLogs/${logId}`);

  const handleFilterChange = (evt: SelectChangeEvent) => {
    setFilter(evt.target.value as FilterTypes)
  }

  const sortedData = useMemo(() => {
    const newData = data ? [...data.logs] : [];

    // If there is a filter option than sort it by date (ascending or descending)
    if (filter || filter !== '') return newData?.sort((a, b) => filter === 'desc' ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime())

    return data?.logs;
  }, [filter, data]);

  if (isLoading) return <CenterWrapper><CircularProgress /></CenterWrapper>
  
  if (isError) return <CenterWrapper><Typography>{t('errors.no-logs')}</Typography></CenterWrapper>

  return (
    <StyledWrapper>
      <Select textBefore="Sort by: " onChange={handleFilterChange} data={selectValues} />
      <Grid container spacing={2}>
        { sortedData?.map(({ id, log, date }) => 
          <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
            <Item>
              <Typography>{log}</Typography>
              <Typography variant='caption'>{date}</Typography>
            </Item>
          </Grid>
        )}
      </Grid>
    </StyledWrapper>
  )
}

export default Details