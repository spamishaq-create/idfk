# Tunelane

A music player UI built with React, Tailwind, Zustand and the Web Audio API.
Three-pane layout (sidebar, content, persistent player bar), a 10-band equalizer,
an independent bass boost, and a live frequency visualizer. No ads.

Tunelane is an original project and is not affiliated with any streaming service.

## Features

- **Your Files:** drag MP3, FLAC, WAV, M4A, AAC or OGG files (or whole folders) anywhere in the
  window, or use *Add files* / *Add folder*. Full-length tracks are stored in IndexedDB on your
  device and are never evicted by the preview cache. Title and artist come from the filename
  (`Artist - Title.mp3`); duration is read from the file.
- **Sound:** every source (your files and previews) goes through the same Web Audio graph:
  bass low-shelf, 10 EQ bands, safety limiter, analyser for the visualizer.
- **Previews:** search and Home use the public iTunes Search API for 30-second previews, cached
  in IndexedDB (capped at 40 clips / 80 MB, least-recently-used eviction).
- Likes and play history persist in `localStorage`. Space toggles play/pause.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Notes

- Your files stay on your device; nothing is uploaded anywhere. Browser storage is finite, and
  clearing site data deletes the library. The app asks the browser to mark storage persistent.
- Format support depends on your browser. FLAC works in current Chrome, Edge, Firefox and Safari;
  files the browser can't decode are reported and skipped on import.
- Colors live in `tailwind.config.js`. The audio graph is in `src/lib/audioEngine.js`.

## Structure

```
src/
  App.jsx                 layout, audio events, global drag-and-drop
  components/             Sidebar, Home, Search, Library, TrackList, TrackRow, Card, Art,
                          PlayerBar, Equalizer, Visualizer
  lib/
    audioEngine.js        Web Audio graph
    audioCache.js         IndexedDB cache for iTunes previews
    localLibrary.js       IndexedDB store for your own files
    dropFiles.js          reads dropped files and folders
    itunes.js, format.js
  store/playerStore.js    Zustand store
```
