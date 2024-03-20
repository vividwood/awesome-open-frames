import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Read more',
      action: 'link',
      target: `https://github.com/open-frames/awesome-open-frames`,
    },
    {
      label: 'Go to bounty',
      action: 'link',
      target: `https://github.com/open-frames/awesome-open-frames/blob/main/BOUNTY.md`,
    },
  ],
  image: `${NEXT_PUBLIC_URL}/picture2.png`,
});

export const metadata: Metadata = {
  title: 'Awesome Open Frame',
  description: 'Interoperable Frames',
  openGraph: {
    title: 'Awesome Open Frame',
    description: 'Interoperable Frames',
    images: [`${NEXT_PUBLIC_URL}/picture2.png`],
  },
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': '2024-02-01',
  },
};

export default function Page() {
  return (
    <>
      <img src={'/picture2.png'} />
    </>
  );
}
