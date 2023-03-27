import { Config } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { ClientConfig } from 'next-sanity';
import { msTheme } from '@src/theme';
import { StudioNavbar } from '@src/components/StudioNavbar';

export const config: Config = {
  name: 'default',
  title: 'MS Buy',
  basePath: '/studio',

  projectId: 'gbmlc5y8',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: msTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
};

export const clientConfig: ClientConfig = {
  projectId: 'gbmlc5y8',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-03-23',
};
