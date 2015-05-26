var jsonAtom = {
  type: 'atom',
  title: 'Example Atom',
  subtitle: 'Example Atom - Test subtitle',
  updated: '2005-07-31T12:29:29Z',
  id: 'tag:example.org,2003:3',
  link: [
    {
      rel: 'alternate',
      type: 'text/html',
      hreflang: 'en',
      href: 'http://example.org/'
    },
    {
      rel: 'self',
      type: 'application/atom+xml',
      href: 'http://example.org/feed.atom'
    }
  ],
  rights: 'Copyright (c) 2003, Example',
  generator: {
    uri: 'http://www.example.com/',
    version: '1.0',
    text: 'Example Toolkit'
  },
  items: [
    {
      title: 'Atom RSS - Entry 1 title',
      link: [
        {
          rel: 'alternate',
          type: 'text/html',
          href: 'http://example.org/2005/04/02/atom'
        },
        {
          rel: 'enclosure',
          type: 'audio/mpeg',
          length: '1337',
          href: 'http://example.org/audio/ph34r_my_podcast.mp3'
        }
      ],
      id: 'tag:example.org,2003:3.2397',
      updated: '2005-07-31T12:29:29Z',
      published: '2003-12-13T08:29:29-04:00',
      author: {
        name: 'Stuart Lees',
        uri: 'http://example.org/',
        email: 'f8dy@example.com'
      },
      contributor: [
        {
          name: 'Rise Vision'
        },
        {
          name: "Stuart Lees"
        }
      ],
      content: {
        type: 'xhtml',
        'xml:lang': 'en',
        'xml:base': 'http://example.org/',
        div: {
          xmlns: 'http://www.w3.org/1999/xhtml',
          p: {
            i: 'Atom RSS Item 1 Content'
          }
        }
      }
    }
  ]
};
