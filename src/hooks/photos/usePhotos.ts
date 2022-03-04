import { useInfiniteQuery } from 'react-query';
import photoApi from '../../apis/photoApi';
import { useEffect } from 'react';

export const usePhotos = () => {
  const { data, hasNextPage, fetchNextPage, isLoading, isError, isFetching } = useInfiniteQuery(
    'photo',
    ({ pageParam = 1 }) => {
      return photoApi.getPhotos(pageParam);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = 10;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
    }
  );

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event: any) => {
      const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener('scroll', onScroll);

    return () => {
      //document.removeEventListener("scroll". onScroll);
    };
  }, [hasNextPage, fetchNextPage]);
  console.log(data);
  return {
    data,
    isLoading,
    isError,
    isFetching,
  };
};
