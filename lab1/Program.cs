using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1 {
    class Program {

        public static string taks1 =
            "7958401743454e1756174552475256435e59501a5c524e176f786517545e47" +
            "5f5245191772195019175e4317445f58425b531743565c521756174443455e" +
            "595017155f525b5b58174058455b5315175659531b17505e41525917435f52" +
            "175c524e175e4417155c524e151b174f584517435f5217515e454443175b52" +
            "4343524517155f1517405e435f17155c151b17435f5259174f584517155215" +
            "17405e435f171552151b17435f525917155b1517405e435f17154e151b1756" +
            "595317435f5259174f58451759524f4317545f564517155b1517405e435f17" +
            "155c15175650565e591b17435f52591715581517405e435f17155215175659" +
            "5317445817585919176e5842175a564e17424452175e5953524f1758511754" +
            "585e59545e53525954521b177f565a5a5e595017535e4443565954521b177c" +
            "56445e445c5e17524f565a5e5956435e58591b17444356435e44435e54565b" +
            "17435244434417584517405f564352415245175a52435f5853174e58421751" +
            "52525b174058425b5317445f584017435f52175552444317455244425b4319";

        public static string ConvertHex(String hexString) {
            try {
                string ascii = string.Empty;

                for (int i = 0; i < hexString.Length; i += 2) {
                    String hs = string.Empty;

                    hs = hexString.Substring(i, 2);
                    uint decval = System.Convert.ToUInt32(hs, 16);
                    char character = System.Convert.ToChar(decval);
                    ascii += character;

                }

                return ascii;
            }
            catch (Exception ex) { Console.WriteLine(ex.Message); }

            return string.Empty;
        }

        private static string xor(string text, string key) {
            var result = new StringBuilder();
            for (int c = 0; c < text.Length; c++)
                result.Append((char)((uint)text[c] ^ (uint)key[c % key.Length]));
            return result.ToString();
        }

        static void Main(string[] args) {

            string task1 = ConvertHex(Program.taks1);
            Console.Write("Text lenght: ");
            Console.WriteLine(task1.Length);

            for (int i = 0; i < 255; i++) {

                Console.WriteLine(xor(task1, i.ToString()));
                Console.WriteLine();
            }
            Console.ReadKey();
        }
    }
}
