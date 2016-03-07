var xmlAtom =
    '<feed xmlns="http://www.w3.org/2005/Atom">' +
      '<title type="text">Example Atom</title>' +
      '<subtitle type="html">Example Atom - Test subtitle</subtitle>' +
      '<updated>2005-07-31T12:29:29Z</updated>' +
      '<id>tag:example.org,2003:3</id>' +
      '<link rel="alternate" type="text/html" hreflang="en" href="http://example.org/"/>' +
      '<link rel="self" type="application/atom+xml" href="http://example.org/feed.atom"/>' +
      '<rights>Copyright (c) 2003, Example</rights>' +
      '<generator uri="http://www.example.com/" version="1.0">Example Toolkit</generator>' +
      '<entry>' +
        '<title>Atom RSS - Entry 1 title</title>' +
        '<link rel="alternate" type="text/html" href="http://example.org/2005/04/02/atom"/>' +
        '<link rel="enclosure" type="audio/mpeg" length="1337" href="http://example.org/audio/ph34r_my_podcast.mp3"/>' +
        '<id>tag:example.org,2003:3.2397</id>' +
        '<updated>2005-07-31T12:29:29Z</updated>' +
        '<published>2003-12-13T08:29:29-04:00</published>' +
        '<author>' +
          '<name>Stuart Lees</name>' +
          '<uri>http://example.org/</uri>' +
          '<email>f8dy@example.com</email>' +
        '</author>' +
        '<contributor>' +
          '<name>Rise Vision</name>' +
        '</contributor>' +
        '<contributor>' +
          '<name>Stuart Lees</name>' +
        '</contributor>' +
        '<content type="xhtml" xml:lang="en" xml:base="http://example.org/">' +
          '<div xmlns="http://www.w3.org/1999/xhtml">' +
            '<p><i>Atom RSS Item 1 Content</i></p>' +
          '</div>' +
        '</content>' +
      '</entry>' +
    '</feed>';
