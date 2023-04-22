import React, { ReactElement, useState } from 'react';
import {
     TerminalItem, 
     TerminalInput,
     TerminalContainer,
     TerminalHistoryContainer,
     SendButton,
     TerminalHeader
    } from './Terminal.styled';

import usePopover from '../../../hooks/usePopover';
import { useStoreState, useStoreActions } from 'easy-peasy';
import styled from 'styled-components';


export function Terminal(): ReactElement {

  const [requestInput, setRequestInput] = useState<string>('');
  const [previousText, setPreviousText] = useState<string>('');

    const downloadedChords = useStoreState((store) => store.downloadedChords.chords);
    const setSerialApiRequests = useStoreActions((store) => store.setSerialApiRequests);
    const serialApiRequests = useStoreState((store) => store.serialApiRequests);
    const serialApiResponses = useStoreState((store) => store.serialApiResponses);
    const updateSerialAPiDataThunk = useStoreActions((store) => store.updateSerialAPiDataThunk);




    const handleSendClick = () => {
      updateSerialAPiDataThunk(requestInput);
      setRequestInput('');
      }

  return (
    
  
  <CardColumn>
    <TerminalContainer>
      <TerminalHeader>Serial Terminal</TerminalHeader>
     <TerminalHistoryContainer>   
          {serialApiRequests.map((allProps) => (
          <TerminalItem
          >{`>` +' '+allProps} </TerminalItem>
              ))}
              {serialApiResponses.map((props) => (
          <TerminalItem
          >{`>` + props} </TerminalItem>
              ))}
              </TerminalHistoryContainer>
              <InputAndButtonRow>
              <TerminalInput
              onChange={e => setRequestInput(e.target.value)} value={requestInput}
              onKeyUp={e => e.key === 'Enter' ? handleSendClick() : ''}
              >
              </TerminalInput>
              <SendButton
              onClick={handleSendClick}
              >Send
              </SendButton>
              </InputAndButtonRow>  
              
    </TerminalContainer>
    </CardColumn>
  );
  
}

const CardColumn = styled.div.attrs({
  className: `flex relative flex-wrap flex-col`,
})``
const InputAndButtonRow = styled.div.attrs({
  className: `flex flex-row `,
})``
