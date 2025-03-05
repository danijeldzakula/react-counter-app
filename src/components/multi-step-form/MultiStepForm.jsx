import { useMachine } from '@xstate/react';
import { formMachine } from '../../xstate/formMachine';
import { useState } from 'react';

const MultiStepForm = () => {
  const [state, send] = useMachine(formMachine);

  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    email: '',
    telefon: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderStep = () => {
    switch (state.value) {
      case 'step1':
        return (
          <>
            <h2>Krok 1: Osnovni podaci</h2>
            <input
              type="text"
              name="ime"
              placeholder="Ime"
              value={formData.ime}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="prezime"
              placeholder="Prezime"
              value={formData.prezime}
              onChange={handleInputChange}
            />
          </>
        );
      case 'step2':
        return (
          <>
            <h2>Krok 2: Kontakt informacije</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="telefon"
              placeholder="Telefon"
              value={formData.telefon}
              onChange={handleInputChange}
            />
          </>
        );
      case 'step3':
        return (
          <>
            <h2>Krok 3: Pregled i potvrda</h2>
            <p>
              <strong>Ime:</strong> {formData.ime}
            </p>
            <p>
              <strong>Prezime:</strong> {formData.prezime}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Telefon:</strong> {formData.telefon}
            </p>
          </>
        );
      case 'submitted':
        return (
          <h2>
            Hvala! Forma je uspešno poslata. <br />
            Podaci: {JSON.stringify(formData, null, 2)}
          </h2>
        );
      default:
        return null;
    }
  };

  const stepCount = Object.keys(formMachine.states).length;

  const goToStep = (stepIndex) => {
    const targetStep = `step${stepIndex + 1}`;
    // Ako je forma poslata, ne dozvoljavamo promenu koraka
    if (state.value === 'submitted') {
      console.log('Forma je već poslata. Resetovanje forme...');
      return; // Ne šaljemo događaj ako je forma već poslata
    }

    if (state.value !== targetStep) {
      console.log('Navigating to:', targetStep);
      send({ type: 'GOTO', target: targetStep });  // Pošaljemo GOTO događaj sa validnim target
    }
  };

  return (
    <div>
      <StepNav step={stepCount} goToStep={goToStep} currentStep={state.value} />

      {renderStep()}

      <div style={{ marginTop: '20px' }}>
        {state.value !== 'step1' && state.value !== 'submitted' && (
          <button onClick={() => send({ type: 'PREV' })}>Nazad</button>
        )}
        {state.value !== 'submitted' && (
          <button
            onClick={() =>
              state.value === 'step3' ? send({ type: 'SUBMIT' }) : send({ type: 'NEXT' })
            }
          >
            {state.value === 'step3' ? 'Pošalji' : 'Dalje'}
          </button>
        )}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function StepNav({ step, currentStep, goToStep }) {
  return (
    <ul className='steps'>
      {Array.from({ length: step }).map((_, idx) => {
        const index = idx + 1;
        const stepName = `step${idx + 1}`;
        const isActive = currentStep === stepName;

        return (
          <li key={stepName} onClick={() => goToStep(idx)} className={`step ${isActive ? 'active' : ''}`}>
            <span>{index}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default MultiStepForm;
