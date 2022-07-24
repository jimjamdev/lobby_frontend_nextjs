import { Flex } from '~components/atoms/Flex';
import { Text } from '~components/atoms/Text';
import { Title } from '~components/atoms/Title';
import { Video } from '~components/atoms/Video';
import { Slider } from '~components/molecules/Slider';
import { handleError } from '~utils/handleError';

export function VideoScroller({ videos }: any) {
  const { data, isLoading, error } = videos;
  if (isLoading) return <div>Loading...</div>;
  if (error) return handleError(error);
  console.log('videos', data);
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
            <Video url={`http://localhost:1337${video?.video?.url}`} autoPlay playsInline type={video?.video?.mime} />
          </Flex>
        ))}
      </Slider>
    </Flex>
  );
}
