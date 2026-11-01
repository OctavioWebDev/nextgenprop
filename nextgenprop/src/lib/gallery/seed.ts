import type { GalleryPhoto } from './types';

// The photos that ship with the site. They show until the first change is saved
// in the admin, after which the saved list (which starts from these) is used.
const photos: Array<[file: string, projectName: string]> = [
  ['BenchMark/20171106-183809-largejpg.jpg', 'Benchmark'],
  ['BenchMark/l.jpg', 'Benchmark'],
  ['BenchMark/ls.jpg', 'Benchmark'],
  ['Maccord&Central/IMG_8277.JPG', 'McCord & Central'],
  ['Maccord&Central/IMG_8279.JPG', 'McCord & Central'],
  ['Maccord&Central/IMG_8491.JPG', 'McCord & Central'],
  ['NagoyaPerrysburg/NAGOYA PERRYSBURG.jpg', 'Nagoya Perrysburg'],
  ['IMG_6491.png', 'Nagoya Perrysburg'],
];

export const seedPhotos: GalleryPhoto[] = photos.map(([file, projectName], i) => ({
  id: `seed-${i + 1}`,
  url: `/images/${file}`,
  projectName,
  description: '',
  date: '',
  location: '',
  // Keeps the original order when sorting.
  createdAt: new Date(Date.UTC(2024, 0, 1, 0, 0, photos.length - i)).toISOString(),
}));
