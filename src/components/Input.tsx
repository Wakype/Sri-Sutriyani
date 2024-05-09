import React, {
  CSSProperties,
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface Props extends InputProps {
  id: string;
  errorMessage?: string | undefined;
  isInvalid?: boolean;
  noLabel?: boolean;
  isInputLeftAddon?: boolean;
  title?: string;
  type?: HTMLInputTypeAttribute;
  backgroundColor?: string;
  hoverStyles?: Record<string, any>; // You can customize this type to match your needs
}

const CustomInput: React.FC<Props> = ({
  id,
  title,
  errorMessage,
  isInvalid,
  backgroundColor,
  hoverStyles,
  type,
  noLabel = false,
  isInputLeftAddon = false,
  ...props
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      {noLabel ? undefined : (
        <FormLabel
          cursor="pointer"
          style={{ width: 'fit-content' }}
          color={'black'}
          htmlFor={id}
          fontWeight=""
        >
          {title}
        </FormLabel>
      )}
      <InputGroup size="md">
        {isInputLeftAddon ? (
          <InputLeftAddon bg={'primary'} border={'primary'} color={'white'}>
            <FaMagnifyingGlass />
          </InputLeftAddon>
        ) : undefined}
        <Input
          as="input"
          type={type || 'text'}
          id={id}
          color="black"
          bg={'#97979780'}
          variant="filled"
          {...props}
        />
      </InputGroup>

      <FormErrorMessage size="xs" color="red" fontWeight="">
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
