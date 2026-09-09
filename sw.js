const CACHE_NAME = 'flight-log-cache-v1.2.8';
const CRITICAL_ASSETS = [
  'styles.css',
  'script.js',
  'index.html',
  'manifest.json'
];
const urlsToCache = [
    '/',
    '/assets/achivements/1.png',
    '/assets/achivements/2.png',
    '/assets/achivements/3.png',
    '/assets/achivements/4.png',
    '/assets/achivements/5.png',
    '/assets/achivements/6.png',
    '/assets/achivements/7.png',
    '/assets/achivements/8.png',
    '/assets/achivements/9.png',
    '/assets/achivements/10.png',
    '/assets/achivements/11.png',
    '/assets/achivements/12.png',
    '/assets/achivements/13.png',
    '/assets/achivements/14.png',
    '/assets/achivements/15.png',
    '/assets/achivements/16.png',
    '/assets/achivements/17.png',
    '/assets/achivements/18.png',
    '/assets/achivements/19.png',
    '/assets/achivements/20.png',
    '/assets/achivements/21.png',
    '/assets/achivements/22.png',
    '/assets/achivements/23.png',
    '/assets/achivements/24.png',
    '/assets/achivements/25.png',
    '/assets/achivements/26.png',
    '/assets/achivements/center2.png',
    '/assets/achivements/1.png',
    '/assets/active.png',
    '/assets/apps.png',
    '/assets/arrow_down.png',
    '/assets/average.png',
    '/assets/avghr.png',
    '/assets/bitcoin.png',
    '/assets/brands/ALFAPILOT.jpg',
    '/assets/brands/DUDEK.png',
    '/assets/brands/advance.png',
    '/assets/brands/air3.png',
    '/assets/brands/anytone.jpg',
    '/assets/brands/apco_aviation.png',
    '/assets/brands/austriAlpin.png',
    '/assets/brands/axis_paragliding.png',
    '/assets/brands/bainbridgeint.jpg',
    '/assets/brands/companion.jpg',
    '/assets/brands/davinci.jpg',
    '/assets/brands/digifly.jpg',
    '/assets/brands/edelrid.jpg',
    '/assets/brands/editorial_perfils.jpg',
    '/assets/brands/fidlock.jpg',
    '/assets/brands/finsterwaldercharly.jpg',
    '/assets/brands/flymaster.jpg',
    '/assets/brands/gin_gliders.jpg',
    '/assets/brands/hanwag.jpg',
    '/assets/brands/high_adventure.jpg',
    '/assets/brands/jdc_electronic.jpg',
    '/assets/brands/kong.jpg',
    '/assets/brands/kortel_design.jpg',
    '/assets/brands/luthor_technologies.jpg',
    '/assets/brands/mac_para.jpg',
    '/assets/brands/mipfly.jpg',
    '/assets/brands/muvit.jpg',
    '/assets/brands/nauzer.jpg',
    '/assets/brands/naviter.jpg',
    '/assets/brands/niviuk.png',
    '/assets/brands/nova.jpg',
    '/assets/brands/ozone.jpg',
    '/assets/brands/peguet.jpg',
    '/assets/brands/polini.jpg',
    '/assets/brands/retevis.jpg',
    '/assets/brands/savior.jpg',
    '/assets/brands/sky_engines.jpg',
    '/assets/brands/sky_paragliders.jpg',
    '/assets/brands/skywalk.jpg',
    '/assets/brands/stodeus.jpg',
    '/assets/brands/sup_air.jpg',
    '/assets/brands/swing.png',
    '/assets/brands/syride.jpg',
    '/assets/brands/tandem_team.jpg',
    '/assets/brands/u_turn.jpg',
    '/assets/brands/velcro.jpg',
    '/assets/brands/vital_parachute.jpg',
    '/assets/brands/volirium.jpg',
    '/assets/brands/wintech_paragliders.jpg',
    '/assets/brands/woody_valley.jpg',
    '/assets/brands/x_dream.jpg',
    '/assets/brands/yaesu.jpg',
    '/assets/flags/ad.png',
    '/assets/flags/ae.png',
    '/assets/flags/af.png',
    '/assets/flags/ag.png',
    '/assets/flags/ai.png',
    '/assets/flags/al.png',
    '/assets/flags/am.png',
    '/assets/flags/ao.png',
    '/assets/flags/aq.png',
    '/assets/flags/ar.png',
    '/assets/flags/as.png',
    '/assets/flags/at.png',
    '/assets/flags/au.png',
    '/assets/flags/aw.png',
    '/assets/flags/ax.png',
    '/assets/flags/az.png',
    '/assets/flags/ba.png',
    '/assets/flags/bb.png',
    '/assets/flags/bd.png',
    '/assets/flags/be.png',
    '/assets/flags/bf.png',
    '/assets/flags/bg.png',
    '/assets/flags/bh.png',
    '/assets/flags/bi.png',
    '/assets/flags/bj.png',
    '/assets/flags/bl.png',
    '/assets/flags/bm.png',
    '/assets/flags/bn.png',
    '/assets/flags/bo.png',
    '/assets/flags/bq.png',
    '/assets/flags/br.png',
    '/assets/flags/bs.png',
    '/assets/flags/bt.png',
    '/assets/flags/bv.png',
    '/assets/flags/bw.png',
    '/assets/flags/by.png',
    '/assets/flags/bz.png',
    '/assets/flags/ca.png',
    '/assets/flags/cc.png',
    '/assets/flags/cd.png',
    '/assets/flags/cf.png',
    '/assets/flags/cg.png',
    '/assets/flags/ch.png',
    '/assets/flags/ci.png',
    '/assets/flags/ck.png',
    '/assets/flags/cl.png',
    '/assets/flags/cm.png',
    '/assets/flags/cn.png',
    '/assets/flags/co.png',
    '/assets/flags/cr.png',
    '/assets/flags/cu.png',
    '/assets/flags/cv.png',
    '/assets/flags/cw.png',
    '/assets/flags/cx.png',
    '/assets/flags/cy.png',
    '/assets/flags/cz.png',
    '/assets/flags/de.png',
    '/assets/flags/dj.png',
    '/assets/flags/dk.png',
    '/assets/flags/dm.png',
    '/assets/flags/do.png',
    '/assets/flags/dz.png',
    '/assets/flags/ec.png',
    '/assets/flags/ee.png',
    '/assets/flags/eg.png',
    '/assets/flags/eh.png',
    '/assets/flags/er.png',
    '/assets/flags/es.png',
    '/assets/flags/et.png',
    '/assets/flags/fi.png',
    '/assets/flags/fj.png',
    '/assets/flags/fk.png',
    '/assets/flags/fm.png',
    '/assets/flags/fo.png',
    '/assets/flags/fr.png',
    '/assets/flags/ga.png',
    '/assets/flags/gb-eng.png',
    '/assets/flags/gb-nir.png',
    '/assets/flags/gb-sct.png',
    '/assets/flags/gb-wls.png',
    '/assets/flags/gb.png',
    '/assets/flags/gd.png',
    '/assets/flags/ge.png',
    '/assets/flags/gf.png',
    '/assets/flags/gg.png',
    '/assets/flags/gh.png',
    '/assets/flags/gi.png',
    '/assets/flags/gl.png',
    '/assets/flags/gm.png',
    '/assets/flags/gn.png',
    '/assets/flags/gp.png',
    '/assets/flags/gq.png',
    '/assets/flags/gr.png',
    '/assets/flags/gs.png',
    '/assets/flags/gt.png',
    '/assets/flags/gu.png',
    '/assets/flags/gw.png',
    '/assets/flags/gy.png',
    '/assets/flags/hk.png',
    '/assets/flags/hm.png',
    '/assets/flags/hn.png',
    '/assets/flags/hr.png',
    '/assets/flags/ht.png',
    '/assets/flags/hu.png',
    '/assets/flags/id.png',
    '/assets/flags/ie.png',
    '/assets/flags/il.png',
    '/assets/flags/im.png',
    '/assets/flags/in.png',
    '/assets/flags/io.png',
    '/assets/flags/iq.png',
    '/assets/flags/ir.png',
    '/assets/flags/is.png',
    '/assets/flags/it.png',
    '/assets/flags/je.png',
    '/assets/flags/jm.png',
    '/assets/flags/jo.png',
    '/assets/flags/jp.png',
    '/assets/flags/ke.png',
    '/assets/flags/kg.png',
    '/assets/flags/kh.png',
    '/assets/flags/ki.png',
    '/assets/flags/km.png',
    '/assets/flags/kn.png',
    '/assets/flags/kp.png',
    '/assets/flags/kr.png',
    '/assets/flags/kw.png',
    '/assets/flags/ky.png',
    '/assets/flags/kz.png',
    '/assets/flags/la.png',
    '/assets/flags/lb.png',
    '/assets/flags/lc.png',
    '/assets/flags/li.png',
    '/assets/flags/lk.png',
    '/assets/flags/lr.png',
    '/assets/flags/ls.png',
    '/assets/flags/lt.png',
    '/assets/flags/lu.png',
    '/assets/flags/lv.png',
    '/assets/flags/ly.png',
    '/assets/flags/ma.png',
    '/assets/flags/mc.png',
    '/assets/flags/md.png',
    '/assets/flags/me.png',
    '/assets/flags/mf.png',
    '/assets/flags/mg.png',
    '/assets/flags/mh.png',
    '/assets/flags/mk.png',
    '/assets/flags/ml.png',
    '/assets/flags/mm.png',
    '/assets/flags/mn.png',
    '/assets/flags/mo.png',
    '/assets/flags/mp.png',
    '/assets/flags/mq.png',
    '/assets/flags/mr.png',
    '/assets/flags/ms.png',
    '/assets/flags/mt.png',
    '/assets/flags/mu.png',
    '/assets/flags/mv.png',
    '/assets/flags/mw.png',
    '/assets/flags/mx.png',
    '/assets/flags/my.png',
    '/assets/flags/mz.png',
    '/assets/flags/na.png',
    '/assets/flags/nc.png',
    '/assets/flags/ne.png',
    '/assets/flags/nf.png',
    '/assets/flags/ng.png',
    '/assets/flags/ni.png',
    '/assets/flags/nl.png',
    '/assets/flags/no.png',
    '/assets/flags/np.png',
    '/assets/flags/nr.png',
    '/assets/flags/nu.png',
    '/assets/flags/nz.png',
    '/assets/flags/om.png',
    '/assets/flags/pa.png',
    '/assets/flags/pe.png',
    '/assets/flags/pf.png',
    '/assets/flags/pg.png',
    '/assets/flags/ph.png',
    '/assets/flags/pk.png',
    '/assets/flags/pl.png',
    '/assets/flags/pm.png',
    '/assets/flags/pn.png',
    '/assets/flags/pr.png',
    '/assets/flags/ps.png',
    '/assets/flags/pt.png',
    '/assets/flags/pw.png',
    '/assets/flags/py.png',
    '/assets/flags/qa.png',
    '/assets/flags/re.png',
    '/assets/flags/ro.png',
    '/assets/flags/rs.png',
    '/assets/flags/ru.png',
    '/assets/flags/rw.png',
    '/assets/flags/sa.png',
    '/assets/flags/sb.png',
    '/assets/flags/sc.png',
    '/assets/flags/sd.png',
    '/assets/flags/se.png',
    '/assets/flags/sg.png',
    '/assets/flags/sh.png',
    '/assets/flags/si.png',
    '/assets/flags/sj.png',
    '/assets/flags/sk.png',
    '/assets/flags/sl.png',
    '/assets/flags/sm.png',
    '/assets/flags/sn.png',
    '/assets/flags/so.png',
    '/assets/flags/sr.png',
    '/assets/flags/ss.png',
    '/assets/flags/st.png',
    '/assets/flags/sv.png',
    '/assets/flags/sx.png',
    '/assets/flags/sy.png',
    '/assets/flags/sz.png',
    '/assets/flags/tc.png',
    '/assets/flags/td.png',
    '/assets/flags/tf.png',
    '/assets/flags/tg.png',
    '/assets/flags/th.png',
    '/assets/flags/tj.png',
    '/assets/flags/tk.png',
    '/assets/flags/tl.png',
    '/assets/flags/tm.png',
    '/assets/flags/tn.png',
    '/assets/flags/to.png',
    '/assets/flags/tr.png',
    '/assets/flags/tt.png',
    '/assets/flags/tv.png',
    '/assets/flags/tw.png',
    '/assets/flags/tz.png',
    '/assets/flags/ua.png',
    '/assets/flags/ug.png',
    '/assets/flags/um.png',
    '/assets/flags/us.png',
    '/assets/flags/uy.png',
    '/assets/flags/uz.png',
    '/assets/flags/va.png',
    '/assets/flags/vc.png',
    '/assets/flags/ve.png',
    '/assets/flags/vg.png',
    '/assets/flags/vi.png',
    '/assets/flags/vn.png',
    '/assets/flags/vu.png',
    '/assets/flags/wf.png',
    '/assets/flags/ws.png',
    '/assets/flags/xk.png',
    '/assets/flags/ye.png',
    '/assets/flags/yt.png',
    '/assets/flags/za.png',
    '/assets/flags/zm.png',
    '/assets/flags/zw.png',
    '/assets/flight.png',
    '/assets/fly.png',
    '/assets/image-icon.png',
    '/assets/import.png',
    '/assets/location.png',
    '/assets/default-background.jpg',
    '/assets/default-background_2.jpg',
    '/assets/logos/48_blk_background.png',
    '/assets/logos/48_white_background.png',
    '/assets/logos/72_blk_background.png',
    '/assets/logos/72_white_background.png',
    '/assets/logos/96_blk_background.png',
    '/assets/logos/96_white_background.png',
    '/assets/logos/128_blk_background.png',
    '/assets/logos/128_white_background.png',
    '/assets/logos/192_blk_background.png',
    '/assets/logos/192_white_background.png',
    '/assets/logos/384_blk_background.png',
    '/assets/logos/384_white_background.png',
    '/assets/logos/512_blk_background.png',
    '/assets/logos/512_white_background.png',
    '/assets/logos/m_apps_logo.png',
    '/assets/logos/menairo.png',
    '/assets/logos/pilots_512.png',
    '/assets/logos/pilots_512w.png',
    '/assets/logos/pilots_logo.png',
    '/assets/logos/pilots_long_blk.png',
    '/assets/logos/pilots_long_white.png',
    '/assets/calendar.png',
    '/assets/check1.png',
    '/assets/check2.png',
    '/assets/country.png',
    '/assets/default-profile.webp',
    '/assets/default-profile.png',
    '/assets/default-background1.jpg',
    '/assets/delete.png',
    '/assets/delta.png',
    '/assets/distance.png',
    '/assets/distances.png',
    '/assets/document.png',
    '/assets/downa.png',
    '/assets/edit.png',
    '/assets/elevation.png',
    '/assets/export.png',
    '/assets/finish.png',
    '/assets/max_alt.png',
    '/assets/maxhr.png',
    '/assets/gaggle.png',
    '/assets/icecode.webp',
    '/assets/mm-192.png',
    '/assets/bin.png',
    '/assets/clubs.png',
    '/assets/locations.png',
    '/assets/files.png',
    '/assets/notes.png',
    '/assets/profile.png',
    '/assets/rating.png',
    '/assets/settings.png',
    '/assets/speed.png',
    '/assets/start.png',
    '/assets/stats.png',
    '/assets/time.png',
    '/assets/plusicon.png',
    '/assets/profiles.png',
    '/assets/ex.png',
    '/assets/edits.png',
    '/assets/plane.png',
    '/assets/upa.png',
    '/assets/school.png',
    '/assets/save.png',
    '/assets/cookie.png',
    '/assets/close.png',
    '/assets/faq.png',
    '/assets/up.png',
    '/assets/down.png',
    '/assets/social/face.png',
    '/assets/social/insta.png',
    '/assets/social/link.png',
    '/assets/social/x.png',
    '/assets/social/m_apps_logo.png',
    '/assets/social/3.png',
    '/assets/social/4.jpg',
    '/assets/social/m_apps_maps.png',
    '/assets/social/m_apps_meteo.png',
    '/assets/social/m_apps_meteo2.png',
    '/assets/social/meteo_b.png',
    '/assets/social/mm-512.png',
    '/assets/windsock.png',
    '/index.html',
    '/libs/chart.js',
    '/libs/flatpickr/flatpickr.min.css',
    '/libs/flatpickr/flatpickr.min.js',
    '/libs/gpxparser.min.js',
    '/libs/html2canvas.min.js',
    '/libs/leaflet-heat.js',
    '/libs/leaflet.css',
    '/libs/leaflet.js',
    '/libs/photoswipe-lightbox.umd.min.js',
    '/libs/photoswipe.css',
    '/libs/photoswipe.umd.min.js',
    '/manifest.json',
    '/script.js',
    '/styles.css',
    '/sw.js',
];


// Install event - cache initial assets and skip waiting
self.addEventListener('install', event => {
  self.skipWaiting(); // Force activation
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app shell');
        return cacheInBatches(cache, urlsToCache);
      })
  );
});

// Helper function to cache in batches
async function cacheInBatches(cache, urls, batchSize = 20) {
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    await Promise.allSettled(
      batch.map(url => 
        cache.add(url).catch(error => {
          console.warn(`Failed to cache ${url}: ${error.message}`);
        })
      )
    );
  }
}

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: clearing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim(); // Take control of clients immediately
    })
  );
});

// Fetch event handler
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Ignore map tile requests
  if (event.request.url.includes('.tile.openstreetmap.org')) {
    return;
  }
  
  // Check if this is a critical asset that should use network-first
  const isCriticalAsset = CRITICAL_ASSETS.some(asset => 
    url.pathname.endsWith(asset) || url.pathname === '/'
  );
  
  if (isCriticalAsset) {
    // Network-first strategy for critical assets
    event.respondWith(handleCriticalAssets(event.request));
  } else {
    // Cache-first strategy for other assets
    event.respondWith(handleOtherRequests(event.request));
  }
});

// Network-first handler for critical assets
async function handleCriticalAssets(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    // Try network first with cache-busting headers
    const networkResponse = await fetch(request, {
      cache: 'reload',
      headers: new Headers({
        'Cache-Control': 'no-cache'
      })
    });
    
    if (networkResponse.ok) {
      // Update the cache with the fresh response
      await cache.put(request, networkResponse.clone());
      return networkResponse;
    }
  } catch (error) {
    console.log('Network request failed, falling back to cache:', error);
  }
  
  // Fall back to cache if network fails
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // If nothing in cache either, try to return index.html for navigation
  if (request.mode === 'navigate') {
    return cache.match('/index.html');
  }
  
  throw new Error('No cached or network response available');
}

// Cache-first handler for other assets
async function handleOtherRequests(request) {
  const cache = await caches.open(CACHE_NAME);
  
  // Try cache first
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Fall back to network
  try {
    const networkResponse = await fetch(request);
    
    // Cache successful GET responses
    if (request.method === 'GET' && networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Fetching resource failed:', error);
    
    // Special handling for API requests
    if (request.url.includes('/api/')) {
      return new Response(JSON.stringify({ error: 'offline' }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // For navigation requests, return index.html
    if (request.mode === 'navigate') {
      return cache.match('/index.html');
    }
    
    throw error;
  }
}

// Listen for messages from the main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'UPDATE_CACHE') {
    event.waitUntil(updateCachedFiles());
  }
});

// Function to update all cached files
async function updateCachedFiles() {
  const cache = await caches.open(CACHE_NAME);
  
  // Update critical assets first
  for (const asset of CRITICAL_ASSETS) {
    try {
      const url = asset.startsWith('/') ? asset : `/${asset}`;
      const response = await fetch(url, { cache: 'reload' });
      if (response.ok) {
        await cache.put(url, response);
      }
    } catch (error) {
      console.error(`Failed to update cache for ${asset}:`, error);
    }
  }
  
  // Then update other cached files
  const batchSize = 10;
  for (let i = 0; i < urlsToCache.length; i += batchSize) {
    const batch = urlsToCache.slice(i, i + batchSize);
    await Promise.allSettled(batch.map(async (url) => {
      try {
        const response = await fetch(url, { cache: 'reload' });
        if (response.ok) {
          await cache.put(url, response);
        }
      } catch (error) {
        console.error(`Failed to update cache for ${url}:`, error);
      }
    }));
  }
  
  // Notify clients that update is complete
  const clients = await self.clients.matchAll();
  clients.forEach(client => {
    client.postMessage({ type: 'UPDATE_COMPLETE' });
  });
}