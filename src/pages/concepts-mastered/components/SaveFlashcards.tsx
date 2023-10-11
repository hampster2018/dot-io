import React, { ReactElement } from 'react';
import { getCount } from '../../manager/components/countChords';
import { useStoreActions, useStoreState } from 'easy-peasy';

const CC_VENDOR_IDS = [0x239a, 0x303a]; // CharaChorder Vendor ID

export function SaveFlashCards(): ReactElement {
  return (
    <React.Fragment>
      <div id="statusDiv" />
      <div id="countDiv" />
      <div id="device" />
      <button
        className="import sc-bYwzuL text-white rounded p-2 mb-4 inline-block ml-2 bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222] position-relative"
        color="pink"
        //onClick={() => allFunc()}
      >
        Save Flashcards{' '}
      </button>
    </React.Fragment>
  );
}
