import { ITheme } from "@poc/interfaces";
import { Component } from "react";
import { ImageOrVideo } from "react-native-image-crop-picker";


export type IPhotoPopupController = {
  getImage: (image: ImageOrVideo) => void;
};

export type IPhotoPopup = {
  visible: boolean;
  onDismiss: () => void;
  onSelectFromGalery: () => void;
  onTakePhoto: () => void;
  theme: ITheme;
};

export class PhotoPopup extends Component<IPhotoPopup> {}
