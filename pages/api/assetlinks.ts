import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ): void {
    res.status(200).json({
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.example.app",
        sha256_cert_fingerprints: ["your app's certificate fingerprint"],
      },
    });
  }