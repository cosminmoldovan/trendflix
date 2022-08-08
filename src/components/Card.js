import * as React from 'react';
import Badge from '@mui/material/Badge';
import { img_300, unavailable } from '../config/config';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ContentModal from './ContentModal';
import { styled } from '@mui/material/styles';


export default function ColorBadge(props) {
    let date = props.first_air_date ? new Date(props.first_air_date) : new Date(props.release_date);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const vote = (props.vote_average) > 0 ? (props.vote_average).toFixed(1) : 'NR';

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: 125,
            top: 20,
            padding: '2px 8px',
            borderRadius: '6px',
            borderBottom: vote >= 7 ? `1px solid ${theme.palette.gold.dark}`: `1px solid ${theme.palette.silver.dark}`,
        },
    }));
    return (
        <ContentModal media_type={props.media_type} id={props.id}>
            <StyledBadge badgeContent={vote} color={vote >= 7 ? "gold" : "silver"} >
                <Card sx={{ width: 150 }}>
                    <CardActionArea sx={{ backgroundColor: "none" }}>
                        <CardMedia
                            component="img"

                            image={props.poster_path ? `${img_300}/${props.poster_path}` : unavailable}
                            alt="green iguana"
                        />
                        <CardContent sx={{ p: 1 }} title={props.title || props.name}>
                            <Typography gutterBottom variant="subtitle1" component="div" noWrap={true}>
                                <span>{props.title || props.name}</span>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {/* {props.media_type === 'tv' ? 'TV Show' : 'Movie'} 
                            &nbsp;&#8226;&nbsp; */}
                                {date.toLocaleDateString('en-us', options)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </StyledBadge>
        </ContentModal>
    );
}