import { Observable } from 'rx';

export default function extendEmail(app) {
  const { AccessToken, Email } = app.modeyes
    AccessToken.prototype.validate
  );
  AccessToken.prototype.destroy$ = Observable.fromNodeCallback(
    AccessToken.prototype.destroy
  );
}
