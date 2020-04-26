import React from 'react';
import {
  BarContainer,
  Bar,
  BarContent,
  BarText,
  BarTitle,
} from './styles';

export default function ProgressBar({ title, progress }) {
  return (
    <BarContainer>
      <BarTitle>{title}</BarTitle>
      <Bar>
        <BarContent progress={progress}>
          <BarText>
            {progress}
            %
          </BarText>
        </BarContent>
      </Bar>
    </BarContainer>
  );
}
