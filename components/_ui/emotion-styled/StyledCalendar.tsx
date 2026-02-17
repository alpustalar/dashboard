import styled from "@emotion/styled";
import Calendar from "react-calendar";

const StyledCalendar = styled(Calendar)(
  ({ theme }) => `
  width: 100%;
  background: ${
    // @ts-expect-error some
    theme.palette.background.paper
  };
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  & * {
    font-family: ${
      // @ts-expect-error some
      theme.typography.fontFamily
    };
  }
  
  

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${
      // @ts-expect-error some
      theme.palette.primary.customColor.light
    };
    color: ${
      // @ts-expect-error some
      theme.palette.primary.contrastText
    };
    padding: 0.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
    border-radius: 5px;

    button {
      background: none;
      border: none;
      color: ${
        // @ts-expect-error some
        theme.palette.primary.contrastText
      };
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
    }
  }

  .react-calendar__month-view__weekdays {
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    font-weight: bold;
    color: ${
      // @ts-expect-error some
      theme.palette.text.secondary
    };
    padding: 0.5rem 0;
    
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__tile {
    background: ${
      // @ts-expect-error some
      theme.palette.background.paper
    };
    color: ${
      // @ts-expect-error some
      theme.palette.text.primary
    };
    padding: 0.75rem;
    text-align: center;
    font-size: 1rem;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid ${
      // @ts-expect-error some
      theme.palette.background.default
    };

    &:enabled:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      background: ${
        // @ts-expect-error some
        theme.palette.primary.light
      };
      color: ${
        // @ts-expect-error some
        theme.palette.primary.contrastText
      };
    }
  }
  
  .react-calendar__tile:disabled {
  background: ${
    // @ts-expect-error some
    theme.palette.action.disabledBackground
  }; 
    color: ${
      // @ts-expect-error some
      theme.palette.text.disabled
    };
    cursor: not-allowed;
    opacity: 0.6;
}

.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}
  

  .react-calendar__tile--active {
    background: ${
      // @ts-expect-error some
      theme.palette.primary.customColor.light
    } !important;
    color: ${
      // @ts-expect-error some
      theme.palette.primary.contrastText
    } !important;
    font-weight: bold;
    cursor: pointer;
  }

  .react-calendar__tile--now {
    background: ${
      // @ts-expect-error some
      theme.palette.primary.light
    };
    color: ${
      // @ts-expect-error some
      theme.palette.text.primary
    };
    font-weight: bold;
    cursor: pointer;
  }
  
   

  .react-calendar__tile--range {
    background: ${
      // @ts-expect-error some
      theme.palette.primary.main
    };
    color: ${
      // @ts-expect-error some
      theme.palette.primary.contrastText
    };
    font-weight: bold;
    cursor: pointer;
  }

 
 
`,
);

export default StyledCalendar;
