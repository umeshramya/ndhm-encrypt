using System;

namespace app
{
    class Program
    {
        static void Main(string[] args)

        {
            string receiverPublicKey = "BF2LTTsrqIUn/gQ2CVdfcdaXxsH/xbfCT8aCdIHqT6z0Uf+yArnMvYEpRi9hD48/+6hYjbhjvKgrqDGQIjGL4nw=";
            string receiverNounce ="eS4c/xv4S+HrzD2+AuiR+8WXAHURWNkEH3tk2M+jKbA=";
            CryptAddm cur = new CryptAddm();
            cur.StrToPerformActionOn="Message to encrypt";
            Console.WriteLine(cur.StrToPerformActionOn);
            cur.Encrypt(receiverPublicKey,receiverNounce );

        }
    }
}




// {
//   "transactionId": "88d6e1d2-c6f5-4522-ab36-8bc5881b0318",
//   "requestId": "48f71823-800e-4033-b492-141aa908a783",
//   "timestamp": "2022-05-21T03:57:21.504198",
//   "hiRequest": {
//     "consent": {
//       "id": "0a25882e-eab4-4474-be6c-9f86198cc42c"
//     },
//     "dateRange": {
//       "from": "2015-05-21T03:56:49.977022",
//       "to": "2022-05-21T03:56:49.977022"
//     },
//     "dataPushUrl": "https://dev.abdm.gov.in/patient-hiu/data/notification",
//     "keyMaterial": {
//       "cryptoAlg": "ECDH",
//       "curve": "curve25519",
//       "dhPublicKey": {
//         "expiry": "2022-05-23T03:56:51.334943",
//         "parameters": "Ephemeral public key",
//         "keyValue": "BF2LTTsrqIUn/gQ2CVdfcdaXxsH/xbfCT8aCdIHqT6z0Uf+yArnMvYEpRi9hD48/+6hYjbhjvKgrqDGQIjGL4nw="
//       },
//       "nonce": "eS4c/xv4S+HrzD2+AuiR+8WXAHURWNkEH3tk2M+jKbA="
//     }
//   }
// }