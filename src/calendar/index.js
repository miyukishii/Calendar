import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS } from './event.utils';

import { Modal, Paper, Typography, Button } from '@mui/material';


export default function CalendarWeek() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <div>
      <div>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev',
          // center: 'title',  //exibe dias e mês por padrão
          right: 'next',
        }}
        initialView='timeGridWeek'
        selectMirror={true}
        weekends // se false, não exibe finais de semana
        initialEvents={INITIAL_EVENTS}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        displayEventTime={false}
        allDaySlot={false}
        locale='pt-br'
        dayHeaderFormat= {{
          month: 'numeric', 
          day: 'numeric',
          weekday: 'long',
          omitCommas: true,
        }}
        slotLabelFormat=
       {{
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: false,
      }}
        slotMinTime='06:00'
        slotMaxTime='24:00'
        buttonText={{
          today: 'Hoje'
        }}
      />

      </div>
      {selectedEvent && (
        <Modal
          open={showModal}
          onClose={handleCloseModal}
        >
          <Paper>
            <Typography variant="h6" gutterBottom>
              {selectedEvent.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Start: {selectedEvent.startStr}
            </Typography>
            <Typography variant="body1" gutterBottom>
              End: {selectedEvent.endStr}
            </Typography>
            <Button onClick={handleCloseModal} variant="contained" color="primary">
              Fechar
            </Button>
          </Paper>
        </Modal>
      )}
    </div>
  );
}
