export function getAssetURL(asset: string) {
  return `${process.env.ASSET_URL ?? ''}/${asset}`;
}
