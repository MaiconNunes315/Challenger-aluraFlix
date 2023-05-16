import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./modal.css"
import { Markup } from 'interweave';

export default function ModalVideo({ open, onClose, videos, slide, baseUrl }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal">
                <span className='close' onClick={onClose}>X</span>
                <iframe className='modalVideo' src={`${baseUrl}${videos.idVideo}`} title={videos.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                </iframe>
                <Typography className='title' id="modal-modal-title" component="h2">{videos.title}</Typography>
                <Markup content={videos.descriptionVideo} className='description' />

            </Box>
        </Modal>
    )
}
