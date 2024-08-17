'use client'
import { Box, Grid, Stack, Typography, Divider } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import Email from './email';

const Contact = () => {
    const alerting = () => {
        alert('Go email us at Headstarteradkm@gmail.com')
    }
    return (
        //create a footer component using material ui
        <Stack direction={'row'} justifyContent={'center'} gap={16} pt={5} pb={2} color={'black'}>
            <Email />
            <Stack direction={'column'} display={'flex'} mt={0.5}>
                <Typography variant='h4' letterSpacing={1.5} fontFamily={"Montserrat"}>Sitemap</Typography>
                <Typography variant='subtitle1' mb={2.5} color={'#c6c6c6'} fontFamily={"Montserrat"}>All our pages</Typography>
                <Divider orientation="horizontal" flexItem />
                <br />
                <Typography mt={2.5} mb={1} letterSpacing={1.5} sx={{ cursor: 'pointer' }} fontFamily={"Montserrat"}>Home</Typography>
                <Typography mt={0.1} mb={1} letterSpacing={1.5} sx={{ cursor: 'pointer' }} fontFamily={"Montserrat"}>Features</Typography>
                <Typography mt={0.1} mb={1} letterSpacing={1.5} sx={{ cursor: 'pointer' }} fontFamily={"Montserrat"}>Pricing</Typography>
                <Typography mt={0.1} mb={1} letterSpacing={1.5} sx={{ cursor: 'pointer' }} fontFamily={"Montserrat"}>Contact</Typography>
            </Stack>
            <Box display={'flex'} mt={1} alignItems={'flex-start'} flexDirection={'column'} spacingx={2}>
                <Typography variant='h4' letterSpacing={1.5} fontFamily={"Montserrat"}>Contact Info</Typography>
                <Typography variant='subtitle1' mb={2.5} color={'#c6c6c6'} fontFamily={"Montserrat"}>Other ways to reach us</Typography>
                <Divider orientation="horizontal" variant="middle" flexItem />
                <Stack direction={'column'} gap={4}>
                    <Typography onClick={alerting} mt={5} sx={{ cursor: 'pointer' }} fontFamily={"Montserrat"}> Email: Headstarteradkm@gmail.com</Typography>
                    <Link href='https://github.com/kevinhui98/AI-Flashcard-SaaS'>
                        <Stack direction="row" spacing={2}>
                            <GitHubIcon />
                            <Typography fontFamily={"Montserrat"}>GitHub</Typography>
                        </Stack>
                    </Link>
                </Stack>
            </Box>
        </Stack>
    )
}
export default Contact