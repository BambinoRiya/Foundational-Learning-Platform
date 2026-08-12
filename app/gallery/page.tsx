import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import GalleryAlbums, { GalleryAlbum } from '@/components/gallery-albums'

const albums: GalleryAlbum[] = [
  {
    id: 'nw-launch',
    title: 'Community of Practice Launch — Northwest Region',
    meta: 'Bamenda · November 2025',
    description:
      'Scenes from the inaugural Northwest CoP workshop — the ratification of the Bamenda Charter and adoption of the regional learning agenda.',
    photos: [
      {
        file: 'Family Photo, Community of Practice Launch North West.jpg',
        caption: 'Family photo — Community of Practice Launch, Northwest Region',
      },
      {
        file: 'The President of the North West Union of Councils, Dang Denis and other dignitaries during the Community of Practice Launch North West.jpg',
        caption: 'The President of the North West Union of Councils, Dang Denis, with other dignitaries',
      },
      {
        file: 'Community of Practice Launch North West Group work activity to come up with a learning agenda.jpg',
        caption: 'Group work activity to develop the regional learning agenda',
      },
      {
        file: 'Participant contributes during Community of Practice Launch North West.jpg',
        caption: 'A participant contributes during the workshop',
      },
      { file: 'Community of Practice Launch North West.jpg', caption: 'Community of Practice Launch — Northwest Region' },
      { file: 'Community of Practice Launch North West(1).jpg', caption: 'Community of Practice Launch — Northwest Region' },
      { file: 'Community of Practice Launch North West(2).jpg', caption: 'Community of Practice Launch — Northwest Region' },
      { file: 'Community of Practice Launch North West(3).jpg', caption: 'Community of Practice Launch — Northwest Region' },
      { file: 'Community of Practice Launch North West(4).jpg', caption: 'Community of Practice Launch — Northwest Region' },
      { file: 'Community of Practice Launch North West(5).jpg', caption: 'Community of Practice Launch — Northwest Region' },
      { file: 'Community of Practice Launch North West(6).jpg', caption: 'Community of Practice Launch — Northwest Region' },
      { file: 'Community of Practice Launch North West(7).jpg', caption: 'Community of Practice Launch — Northwest Region' },
    ],
  },
  {
    id: 'centre-training',
    title: 'Systematic Review Training — Centre Region',
    meta: 'Yaoundé',
    description: 'Capacity-building session on systematic review methods with the Centre Region CoP.',
    photos: [
      { file: 'CoP Systematic Review Training Centre.png', caption: 'Systematic Review Training — Centre Region' },
      { file: 'CoP Systematic Review Training Centre(1).png', caption: 'Systematic Review Training — Centre Region' },
      { file: 'CoP Systematic Review Training Centre(2).png', caption: 'Systematic Review Training — Centre Region' },
    ],
  },
]

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border-subtle py-20 md:py-28">
          <div className="hero-glow absolute inset-0" />
          <div className="cop-container relative z-10">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Photo Gallery</p>
              <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Community Gallery
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: '#5d4730' }}>
                Moments from CoP workshops, evidence sprints and training sessions across the Northwest
                and Centre regions — the people and conversations behind the data.
              </p>
            </div>
          </div>
        </section>

        {/* Albums */}
        <section className="py-16 md:py-24">
          <div className="cop-container">
            <div className="mb-8">
              <p className="eyebrow mb-2">Albums</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-3">Browse by event</h2>
              <p className="text-base max-w-3xl" style={{ color: '#5d4730' }}>
                Select an album to open the full set of photos.
              </p>
            </div>

            <GalleryAlbums albums={albums} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
