import React from 'react';
import { InlineShareButtons, InlineFollowButtons } from 'sharethis-reactjs';

const SocialIcons = ({ share = false }) => {
  return (
    <>
      {!share ? (
        <InlineShareButtons
          config={{
            alignment: 'center', // alignment of buttons (left, center, right)
            color: 'social', // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16, // font size for the buttons
            labels: null, // button labels (cta, counts, null)
            language: 'pt', // which language to use (see LANGUAGES)
            networks: ['whatsapp', 'linkedin', 'messenger', 'facebook'],
            padding: 12, // padding within buttons (INTEGER)
            radius: 4, // the corner radius on each button (INTEGER)
            show_total: false,
            size: 50, // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url: 'https://www.sharethis.com', // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
            description: 'custom text', // (defaults to og:description or twitter:description)
            title: 'custom title', // (defaults to og:title or twitter:title)
          }}
        />
      ) : (
        <InlineFollowButtons
          config={{
            action: '', // call to action (STRING)
            action_enable: false, // show/hide call to action (true, false)
            action_pos: 'bottom', // position of call to action (left, top, right)
            alignment: 'center', // alignment of buttons (left, center, right)
            color: 'social', // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            networks: ['linkedin', 'facebook', 'instagram', 'youtube'],
            padding: 12, // padding within buttons (INTEGER)
            profiles: {
              linkedin: 'mappa-dealer',
              facebook: 'Mappa-Dealer-114536316971638',
              instagram: 'mappadealer',
              youtube: '/channel/UCaisF7-eapsh3hIi2uOJzBg?view_as=subscriber',
            },
            radius: 4, // the corner radius on each button (INTEGER)
            size: 50, // the size of each button (INTEGER)
            spacing: 3, // the spacing between buttons (INTEGER)
          }}
        />
      )}
    </>
  );
};

export default SocialIcons;
