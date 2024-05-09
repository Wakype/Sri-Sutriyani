'use client';
import {
  Box,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Flex,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import CustomButton from './button';

interface TableColumn {
  key: string;
  label: string;
}

interface TableProps {
  data: any[];
  columns: TableColumn[];
  title: string;
  addTitle?: string;
  addHref?: string;
  itemsPerPage?: number;
  isAddPage?: boolean;
}

const CustomTable: React.FC<TableProps> = ({
  data,
  columns,
  addHref = '/',
  addTitle,
  title,
  itemsPerPage = 5,
  isAddPage = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full">
      <Box p={4}>
        <div className="w-full flex justify-between items-center mb-5">
          <Heading size="lg" mb={4} textTransform={'capitalize'}>
            {title}
          </Heading>
          {isAddPage ? (
            <Link href={addHref}>
              <CustomButton>{addTitle}</CustomButton>
            </Link>
          ) : undefined}
        </div>

        <Box overflowX="auto">
          <ChakraTable variant="simple">
            <Thead bg={'primary'}>
              <Tr>
                {columns.map((column) => (
                  <Th key={column.key} color={'white'}>
                    {column.label}
                  </Th>
                ))}
                <Th color={'white'}>Aksi</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentItems.map((row, index) => (
                <Tr key={index}>
                  {columns.map((column) => (
                    <Td key={column.key}>{row[column.key]}</Td>
                  ))}
                  <Td className="flex items-center space-x-3">
                    <div className="rounded-md bg-yellow-600 cursor-pointer p-2">
                      <MdEdit className="text-white" />
                    </div>
                    <div className="rounded-md bg-red-600 cursor-pointer p-2">
                      <MdDelete className="text-white" />
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </ChakraTable>
        </Box>
        <Flex mt={4} justify="flex-end">
          <Box>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              ml={2}
              onClick={() => paginate(currentPage - 1)}
              isDisabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              ml={2}
              onClick={() => paginate(currentPage + 1)}
              isDisabled={currentPage === totalPages}
            >
              Next
            </Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default CustomTable;
