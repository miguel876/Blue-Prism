import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import { ErrorContainer, StyledButtonContainer, StyledFilterWrapper, StyledWrapper } from './list.styles';
import Card from 'components/card';
import { useTranslation } from 'react-i18next';
import Button from 'components/button';
import Skeleton from 'components/skeleton';
import Context from 'context';
import useQuery from 'hooks/useQuery';
import useMutation from 'hooks/useMutation';
import { PropType } from './list.types';
import Checkbox from 'components/checkbox';
import { toast } from 'react-toastify';

const List = () => {
    const { t } = useTranslation();
    const { data, isLoading, isError, refetch } = useQuery<PropType[]>('schedules'); 
    const [ mutation, { isSuccess } ] = useMutation('PUT');
    const { setLogId } = useContext(Context);
    const [ toggleRetired, setToggleRetired ] = useState<boolean>(false);

    const onCardClickHandler = useCallback((id: number) => {
        setLogId?.(id);
    }, [setLogId]);

    const onRetireHandler = useCallback((evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, log: PropType) => {
        evt.stopPropagation(); // Prevent showing the detail page when retiring the schedule
        mutation(`schedules/${log.id}`, { ...log, retired: !log.retired });
    }, []);

    useEffect(() => {
        if (isSuccess) {
            refetch?.();
            toast.success(t('messages.success'))
        }
    }, [isSuccess]);

    if (isError) return <ErrorContainer><Typography>{t('errors.no-schedules')}</Typography></ErrorContainer>
  return (
    <StyledWrapper>
        { isLoading && !isSuccess && <Skeleton lines={6} /> /* Load only when entering the page */}
        <StyledFilterWrapper>
            <Checkbox position="start" label={t('labels.show-retired')} onClick={() => setToggleRetired(!toggleRetired)} />
        </StyledFilterWrapper>
        {data?.map(({ id, title, detail, retired }) => 
            (!retired || toggleRetired) && (
                <Card onClick={() => onCardClickHandler(id)} key={id} retired={retired} >
                    <Typography>{title}</Typography>
                    <Typography variant="body2">{detail}</Typography>
                    <StyledButtonContainer>
                        <Button 
                            onClick={(evt) => onRetireHandler(evt, { id, title, detail, retired })} 
                            onMouseDown={(evt) => evt.stopPropagation()}
                        >
                            { retired ? t('labels.unretire') : t('labels.retire') }
                        </Button>
                    </StyledButtonContainer>
                </Card>
            )
        )}
    </StyledWrapper>
  )
}

export default List;