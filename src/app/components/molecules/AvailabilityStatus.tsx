import React, { useState } from 'react';
import RadioButton from '../atoms/4.ia/radio/RadioButton';

const AvailabilityStatus: React.FC = () => {
  const [status, setStatus] = useState('Available');

  return (
    <div className="space-y-2">
      <RadioButton name="status" value="Available" checked={status === 'Available'} onChange={() => setStatus('Available')} label="Available" />
      <RadioButton name="status" value="Unavailable" checked={status === 'Unavailable'} onChange={() => setStatus('Unavailable')} label="Unavailable" />
      <RadioButton name="status" value="Outside" checked={status === 'Outside'} onChange={() => setStatus('Outside')} label="Available, but outside the lecturer's room" />
      <RadioButton name="status" value="Urgent" checked={status === 'Urgent'} onChange={() => setStatus('Urgent')} label="Urgent only, must have an appointment" />
    </div>
  );
};

export default AvailabilityStatus;
