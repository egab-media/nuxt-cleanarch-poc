/* eslint-disable max-len */
import * as functionsSource from "firebase-functions";
import * as adminSource from "firebase-admin";

export const databaseURL = `https://${process.env.PROJECT_ID}.firebaseio.com`;

adminSource.initializeApp({
  credential: adminSource.credential.cert({
    // clientEmail: process.env.CLIENT_EMAIL,
    // privateKey: process.env.PRIVATE_KEY,
    // projectId: process.env.PROJECT_ID,
    clientEmail: "firebase-adminsdk-jacsp@egab-backend-test.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCnoaAxX+u6jLdI\nXtih3rslU8I+zNOn/5hgJWPl/Sy/7GsvEEpzaObUire7M9Rhi8jf9yO/oI95Mf6S\nJ4rTTS0iEPitMc5IHTnHuGXpfYE/fx/dMV6LbNuLumBSR+yMC1Xkyo0PEZnjrwUI\n/qQFdJ5/Yq6M9IFkQMu5A5dqbNV4Lj4N45sRYk3ecRUB3DJaIlDv388KoKHukY+O\nYjDP9VR7SB1nOZ08WM3yZ0hPNDNeHLxgfMfnnegNnq1wHTN0SbX85/e0C42NbDAj\n8MXbPvQNOc5y0z1hKzqYeBTcDCmMB7Sx38yZxNJPuh4Am612vFiO958K/ahev0tt\nOsgepXnlAgMBAAECggEAAnWJHX2lfjlZvU6iOW+vHvtP/m6v99yJ86EgynXbbfOt\n19p9PnJZGTWcFTuLqk8BaE2zwSLTGqlMgtWLKxHhr14AiT6RjYvGNk3tdXkr8qPu\nslFALJCb1jx/9L0Nio67rhf4Qp1qEfBrmmftPTo/0qkT2/QAoO6gE8uqcTsoVN4S\nCUZ80OC4cyeoWJlqYNnoUot0KGxWAAkw5wOJP0TT1F2L7Xc2qPSBN7CIDicDdTIA\nrp7Qx2oEDizVI1vL8ZEHehtTlMrOUeibxIosMey+KU1tGf3DXmin2ZRQG6n68moJ\nKsmLxYKQWU8AEvWeHO46/sNmLtqUYLcveTJG6LHawQKBgQDfBSrtJ68xPgPFIEUO\nW2aG/F6qVPra90jLfTRtnb0abau80H1JT+uEs+LEUGNTxGJn6bLaK2k3kHPjNMl9\neHXz/4pKQKX4eNVgfuI1ZnJohMOXXmtwbUQKiMXTm9Q5Zlm+mcqscmTGVNTmK0c+\nlkkCADd9gescPB4xm4X7/iFSQQKBgQDAa50S0nUjXG6ZSDxekiDy50sUi0RuIZfS\nPGuUVuxhDid4v/hzNc7aBe9K8Q/zcugjtAKa7fFUjSxkmPCIPkULsGu3wmvgYPZP\n4fXwIi6T0eK5nsVMyPAPqy3Sk21/Akq7AZebM6U6DqPKVsbM8oKUchwe5OOfHhBJ\nUF0ZQ+H2pQKBgBLHDpw1MS0GOa8JTocs7u8CpL3WteBl3b00Z4urMlbdUQ5ux326\nuuvLcZZx5ksRR+/T33k7GnrRMNC6ixSDZfsLUwt5cf//vIeJZ2Zzn8JpG0bNbmJi\n8M2qQm3UuwOyOHAx5ryqTQ3d6qcOkcsVQERo3EM3AyK3dRtcKuXSud+BAoGAFTRG\nrOpQSkNHVNDnBizoQJxIY80tD03YYyyRVll11wQuSVouUNPfJZt90S5baaKB/l05\n5ETQUVb1S2inKPxjs3QPisJ8DM/ilM77wSijJVr9tyLN7zY9bhyZAhmI+XQRNCZq\nxImebZVra0LAyZj31s/0VVs30jMH7GxUthIK9pkCgYBamvmW+Eu3FpVCcaq8uuxz\nqOFFIv4RcYA6zAkPKxZz/jpuCQ/zUtj5fsnNpglrvyFQaMHiHNgpxzRcYf5Wnqtg\nIHsLXtuplzJ1XP59D9zHmoR5T8koyOSIPd0PfaNfWh7wQtQqXXNoMVlpdcBJKN/B\nU0hW0odArx+SCYPC8DkUfw==\n-----END PRIVATE KEY-----\n",
    projectId: "egab-backend-test",
  }),
});

export const db = adminSource.firestore();
export const functions = functionsSource;
export const admin = adminSource;
