"use client";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginatorProps {
  totalItems: number;
  itemsPerPage: number;
}

export default function Paginator({
  totalItems,
  itemsPerPage,
}: PaginatorProps) {
  const router = useRouter();
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
  };

  useEffect(() => {
    setPage(Math.floor(offset / itemsPerPage) + 1);
    router.push(
      `/?offset=${offset}&page=${Math.floor(offset / itemsPerPage) + 1}`,
    );
  }, [offset, itemsPerPage, router]);

  const getPageNumbers = () => {
    const maxPagesToShow = 3;
    let startPage = Math.max(1, page - 1);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  };

  return (
    <Pagination>
      <PaginationContent>
        <Button disabled={page == 1}>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(offset - itemsPerPage)}
            />
          </PaginationItem>
        </Button>
        {totalPages > 3 && page === totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {getPageNumbers().map((pageNumber) => (
          <Button
            key={pageNumber}
            className={`${pageNumber === page ? "bg-amber-300" : ""}`}
          >
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() =>
                  handlePageChange((pageNumber - 1) * itemsPerPage)
                }
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          </Button>
        ))}
        {totalPages > 3 && page !== totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <Button disabled={page === totalPages}>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(offset + itemsPerPage)}
            />
          </PaginationItem>
        </Button>
      </PaginationContent>
    </Pagination>
  );
}
