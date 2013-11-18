
var media_ids = {
  'god-save-the-queen': {
    spotify: '6ui6l3ZNvlrGQZArwo8195',
    youtube: 'R8fLOJswWtk'
  },
  'sonic-reducer': {
    spotify: '678Fh7cIfN1sLqxsj5sc2G',
    youtube: 'mdu3EU6sbng'
  },
  'give-me-the-cure': {
    spotify: '1nEchyBF1nPPfIAq4YGRyc',
    youtube: 'rFuDJ8bXPUw'
  },
  'career-opportunities': {
    spotify: '4aKMvmxQgX7J766G4pFlyh',
    youtube: 'jZOrkPIZ1JU'
  },
  'lets-dance-chris-montez': {
    spotify: '2Qm5DrmotzWvqNM3JlcQYo',
    youtube: 'EAveLaziBmQ'
  },
  'lets-dance-ramones': {
    spotify: '2hanzn1vHVREYNFzHYhOwX',
    youtube: '7f1uWMC7i9k'
  },
  'soul-kitchen-doors': {
    spotify: '2Xdc6qyaFBJZ8QW1KhpVci',
    youtube: 'QxizIrbcSuU'
  },
  'soul-kitchen-x': {
    spotify: '6nnjEqZuTa8cd5m35e1o0R',
    youtube: 'yiow7X3hlVk'
  },
  'warsaw': {
    spotify: '1B6rqWbsidjU5eWxg3viXG',
    youtube: 'iuVG2WUlLyw'
  },
  'shadowplay': {
    spotify: '79CfK2gMGf0svanec6LJOj',
    youtube: 'juD4ayBbHdY'
  },
  'temptation': {
    spotify: '6aydUK6llaiRoKQyQTDNPY',
    youtube: '1Yd_w0LybRk'
  },
  'blue-monday': {
    spotify: '6gv02BqPCsOQz5QQ4jnNOY',
    youtube: 'e9uoQm8xedA'
  },
  'kids': {
    spotify: '1jJci4qxiYcOHhQR247rEU',
    youtube: 'aBd46BbdTfs'
  },
  'where-is-my-mind': {
    spotify: '6z5KJH8tgGvPFOqoSScPgS',
    youtube: 'Bv9b2gjJjd4'
  },
  'pink-turns-to-blue': {
    spotify: '1icyef1nNmLusODA03FLGf',
    youtube: 'kTjfl0yhyRk'
  },
  'teen-age-riot': {
    spotify: '2tHCRnraE3HBGewTsaxhgh',
    youtube: 'BKMD8vI1MaM'
  },
  'smells-like-teen-spirit': {
    spotify: '75aLTVBSGIquqzQ6AkmK3Q',
    youtube: 'hTWKbfoikeg'
  },
  'freak-scene': {
    spotify: '4HItkIfvl7S8J2euDhoDXr',
    youtube: 'vV2kJ0rSfKU'
  },
  'chesterfield-king': {
    spotify: '1S9NZjGx3O2BYyaLMnO9ut',
    youtube: 'TVbaYdh6hhc'
  },
  'another-state-of-mind': {
    spotify: '1MW7XOHGbdBQrVM2L88VH4',
    youtube: 'oJtk4N-t4VA'
  },
  'feel-the-pain': {
    spotify: '3NLUIBHlfnMVk81BgxFr42',
    youtube: 'OQZmrdwK7YM'
  },
  'chemistry': {
    spotify: '2gkTMvu0sq40EvgF3v9dpQ',
    youtube: 'YBaOHmN4QkM'
  },
  'ball-and-chain': {
    spotify: '4CsTkNvkwQLel6sxQqrXSj',
    youtube: 'hzvNWGa_z70'
  },
  'heroin': {
    spotify: '7xsvZuhTQEGsLfopzFjMsS',
    youtube: 'ffr0opfm6I4'
  },
  'down-at-the-sea': {
    spotify: '2WOMnoM9wKlASLNOGxRk5D',
    youtube: 'd7woqQdgP-4'
  },
  'good-things': {
    spotify: '4QIPqSI6VQ7WB7PIdyTYuv',
    youtube: 'iu8bCtMDkkc'
  },
  'assassins': {
    spotify: '70Zgcd8LaLHRR2ZSOcRjXL',
    youtube: '1Rha2EeCSu0'
  },
  'all-the-small-things': {
    spotify: '7yCPwWs66K8Ba5lFuU2bcx',
    youtube: '9Ht5RZpzPqw'
  },
  'dirty-little-secret': {
    spotify: '5lDriBxJd22IhOH9zTcFrV',
    youtube: 'gPDcwjJ8pLg'
  },
  'my-songs-know-what-you-did-in-the-dark': {
    spotify: '7s0lDK7y3XLmI7tcsRAbW0',
    youtube: 'LkIWmsP3c_s'
  },
  'part-time-punks': {
    spotify: '2hmyNVIJReznYP3hOG6ZB7',
    youtube: '_pKkOOQR7_o'
  }
}

function embed_media(title, media_type, is_small) {

  is_small = typeof is_small !== 'undefined' ? is_small : false;

  if (is_small) { width = 250; height = 80; }
  else { width = 250; height = 330; }

  id = media_ids[title][media_type];
  if (id == undefined) {
    return '<small>Sorry! Your media type option (Spotify/YouTube) does not exist for this title.</small>'
  }
  if (media_type == 'spotify') {
    return '<iframe src="https://embed.spotify.com/?uri=spotify:track:' + 
      id + '" width="' + width + '" height="' + height + 
      '" frameborder="0" allowtransparency="true"></iframe>';
  }
  else if (media_type == 'youtube') {
    return '<iframe width="' + width + '" height="' + height + 
      '" src="//www.youtube.com/embed/' + id + 
      '" frameborder="0" allowfullscreen></iframe>';
  }
  else {
    return '<small>Sorry! Your media type option was not recognized.</small>'
  }

}

function load_media(media_type) {
  $('div.song, span.song').each(function() {
    $(this).empty();
    $(this).append(embed_media($(this).attr('id'), media_type));
  });
  $('div.small-song, span.small-song').each(function() {
    $(this).empty();
    $(this).append(embed_media($(this).attr('id'), media_type, true));
  });
}

$(function() {
  load_media($('input:radio[name=mediatype]:checked').attr('id'));
  $('input[name=mediatype]:radio').change(function() {
    load_media($('input:radio[name=mediatype]:checked').attr('id'));
    $('input:radio[name=mediatype]').blur(); // so that left/right work immediately
  });
});
