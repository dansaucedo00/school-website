import React, { useState } from 'react';
import { DateCalendar, PickersDay } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { es } from 'date-fns/locale';
import { isWeekend, isSameDay } from 'date-fns';

export function CalendarioMUI() {
  const [value, setValue] = useState(new Date());
  const customLocale = {
    ...es,
    options: {
      ...es.options,
      weekStartsOn: 0,
    },
  };

  // Lista de feriados (puedes modificar estas fechas)
  const feriados = [
    { fecha: new Date(2025, 4, 1), motivo: "Día del Trabajador" },
    { fecha: new Date(2025, 5, 20), motivo: "Día de la Bandera" },
    { fecha: new Date(2025, 6, 9), motivo: "Independencia" },  // 9 de julio
  ];

  const [motivoFeriado, setMotivoFeriado] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
    const feriado = feriados.find((f) => isSameDay(f.fecha, newValue));
    setMotivoFeriado(feriado ? feriado.motivo : '');
  };
  // Función para saber si es feriado
  const esFeriado = (day) =>
    feriados.some((f) => isSameDay(day, f.fecha));

  return (
    <section style={{ textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ color: '#1976d2', marginBottom: '1rem' }}>📅 Calendario Escolar</h2>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={customLocale}>
        <div style={{
          backgroundColor: '#191970',
          color: 'white',
          borderRadius: '1rem',
          padding: '1rem',
          width: 'fit-content',
          margin: '0 auto',
          boxShadow: '0 0 15px rgba(0,0,0,0.3)'
        }}>
          <DateCalendar
            value={value}
            onChange={handleChange}
            sx={{
              '& .MuiTypography-root': { color: 'white' },
              '& .MuiDayCalendar-weekDayLabel': { color: 'white' },
              '& .MuiPickersCalendarHeader-label': { color: 'white' },
            }}
            slots={{
              day: (props) => {
                const isFinde = isWeekend(props.day);
                const isFeriado = esFeriado(props.day);
                const isSelected = isSameDay(props.day, value);

                return (
                  <PickersDay
                    {...props}
                    sx={{
                      borderRadius: isSelected ? '50%' : '0',
                      border: isSelected ? '2px solid #1976d2' : 'none',
                      color:
                        isFinde || isFeriado ? '#ff5252' : 'white',
                      backgroundColor: isSelected ? '#1976d2' : 'transparent',
                      '&:hover': {
                        backgroundColor: '#1976d2',
                        color: 'white',
                        borderRadius: '50%',
                      },
                    }}
                  />
                );
              }
            }}
          />
          {/* Observación del feriado dentro del bloque del calendario */}
          {motivoFeriado && (
            <div style={{ height: '2.5rem', marginTop: '0.1rem', color: '#ffcc00',transition: 'color 0.3s ease', }}>
              📌 <strong>{motivoFeriado || '⠀'}</strong>
            </div>
          )}
        </div>
      </LocalizationProvider>
    </section>
  );
}