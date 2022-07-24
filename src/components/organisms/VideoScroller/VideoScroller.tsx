import { Flex } from '~components/atoms/Flex';
import { Text } from '~components/atoms/Text';
import { Title } from '~components/atoms/Title';
import { Video } from '~components/atoms/Video';
import { Slider } from '~components/molecules/Slider';
import { config } from '~config/index';
import { handleError } from '~utils/handleError';

export function VideoScroller({ videos }: any) {
  const { data, isLoading, error } = videos;
  if (isLoading) return <div>Loading...</div>;
  if (error) return handleError(error);
  return (
    <Flex bg="mono.1" flexDirection="column" alignItems="center" pb={4}>
      <Title>Videos</Title>
      <Text>See what other players are doing</Text>
      <Slider>
        {data?.data.map((video: any) => (
          <Flex
            key={video.id}
            bg="mono.0"
            justifyContent="center"
            alignItems="center"
            width="150px"
            height="240px"
          >
            <Video src={`${config?.uploadsUrl}${video?.video?.url}`} autoPlay type={video?.video?.mime} />
          </Flex>
        ))}
      </Slider>
    </Flex>
  );
}
