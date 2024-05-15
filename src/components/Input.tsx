import React, { HTMLInputTypeAttribute } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
} from '@chakra-ui/react';

interface Props extends InputProps {
  id: string;
  errorMessage?: string;
  isInvalid?: boolean;
  noLabel?: boolean;
  title?: string;
  type?: HTMLInputTypeAttribute;
}

const CustomInput: React.FC<Props> = ({
  id,
  title,
  errorMessage,
  isInvalid,
  type,
  noLabel = false,
  ...props
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      {!noLabel && (
        <FormLabel htmlFor={id} color="black">
          {title}
        </FormLabel>
      )}
      <InputGroup size="md">
        <Input
          type={type || 'text'}
          id={id}
          color="black"
          bg="#97979780"
          variant="filled"
          {...props}
        />
      </InputGroup>
      {errorMessage && (
        <FormErrorMessage size="xs" color="red">
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CustomInput;
