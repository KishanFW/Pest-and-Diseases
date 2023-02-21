<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pest;

class PestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pest::create([
            'pest_name' => 'Borer and fruit borer',
            'translatable_pest_name' => json_encode(['en' => 'Borer and fruit borer', 'ta' => 'துளைப்பான் மற்றும் பழம் துளைப்பான்', 'si' => 'කම්මැලි සහ ගෙඩි විදින්නා']),
            'management' => json_encode([
              'en' => '
                <ul>
                  <li>Applying a live or non-living barrier (corn, sorghum or insect resistant net) around the brinjal field to a height of about 2 m.</li>
                  <br>
                  <li> When this damage was first seen in cultivated plants, cut underneath the affected parts of the damaged area and remove them from the plant and destroy them.</li>
                  <br>
                  <li>Check the crop once a week.</li>
                  <br>
                  <li>This damage can be controlled by spraying a suitable insecticide at the time of 50% flowering.</li>
                  <br>
                  <li>Gain an understanding of the number of damaged fruit at harvest and apply a recommended insecticide only if the number of damaged fruit is more than 5%.</li>
                  <br>
                  <li>Pay attention to pre-harvest timing and avoid continuous use of the same insecticide.</li>
                  <br>
                  <li>Be aware of pre-harvest timing when applying insecticides at harvest.</li>
                  <br>
                  <li>Chemical suppression
                    <ul>
                      <li>Apply recommended agrochemicals as recommended</li>
                    </ul>
                  </li>
                </ul>',
              'ta' => '
                <ul>
                   <li>கத்தரி வயலைச் சுற்றி 2 மீ உயரத்திற்கு உயிருள்ள அல்லது உயிரற்ற தடையை (சோளம், சோளம் அல்லது பூச்சி எதிர்ப்பு வலை) பயன்படுத்துதல்.</li>
                   <br>
                   <li> பயிரிடப்பட்ட செடிகளில் இந்த சேதம் முதன்முதலில் காணப்பட்டபோது, சேதமடைந்த பகுதியின் பாதிக்கப்பட்ட பகுதிகளுக்கு அடியில் வெட்டி, செடியிலிருந்து அகற்றி அழிக்கவும்.</li>
                   <br>
                   <li>வாரத்திற்கு ஒருமுறை பயிரைச் சரிபார்க்கவும்.</li>
                   <br>
                   <li>50% பூக்கும் நேரத்தில் பொருத்தமான பூச்சிக்கொல்லியை தெளிப்பதன் மூலம் இந்த சேதத்தை கட்டுப்படுத்தலாம்.</li>
                   <br>
                   <li>அறுவடையின் போது சேதமடைந்த பழங்களின் எண்ணிக்கையைப் புரிந்துகொண்டு, சேதமடைந்த பழங்களின் எண்ணிக்கை 5%க்கு மேல் இருந்தால் மட்டுமே பரிந்துரைக்கப்பட்ட பூச்சிக்கொல்லியைப் பயன்படுத்தவும்.</li>
                   <br>
                   <li>அறுவடைக்கு முந்தைய நேரத்தில் கவனம் செலுத்துங்கள் மற்றும் அதே பூச்சிக்கொல்லியை தொடர்ந்து பயன்படுத்துவதை தவிர்க்கவும்.</li>
                   <br>
                   <li>அறுவடையின் போது பூச்சிக்கொல்லிகளைப் பயன்படுத்தும்போது அறுவடைக்கு முந்தைய நேரத்தைக் குறித்து எச்சரிக்கையாக இருங்கள்.</li>
                   <br>
                   <li>ரசாயன அடக்குமுறை
                     <ul>
                       <li>பரிந்துரைக்கப்பட்ட வேளாண் இரசாயனங்களை பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும்</li>
                     </ul>
                   </li>
                 </ul>',
              'si' => '
              <ul>
                   <li>සජීවී හෝ අජීවී බාධකයක් (ඉරිඟු, බඩ ඉරිඟු හෝ කෘමි ප්‍රතිරෝධී දැලක්) බටු ක්ෂේත්‍රය වටා මීටර් 2ක් පමණ උසකට යෙදීම.</li>
                   <br>
                   <li> වගා කරන ලද ශාකවල මෙම හානිය මුලින්ම දුටු විට හානියට පත් ප්‍රදේශයේ හානියට පත් කොටස් යටින් කපා ඒවා ශාකයෙන් ඉවත් කර විනාශ කරන්න.</li>
                   <br>
                   <li>සතියකට වරක් බෝගය පරීක්ෂා කරන්න.</li>
                   <br>
                   <li>50% මල් පිපෙන අවස්ථාවේ සුදුසු කෘමිනාශකයක් ඉසීමෙන් මෙම හානිය පාලනය කළ හැක.</li>
                   <br>
                   <li>අස්වැන්නේ හානියට පත් පලතුරු සංඛ්‍යාව පිළිබඳ අවබෝධයක් ලබා ගෙන හානියට පත් පලතුරු සංඛ්‍යාව 5% ට වඩා වැඩි නම් පමණක් නිර්දේශිත කෘමිනාශකයක් යොදන්න.</li>
                   <br>
                   <li>පෙර අස්වනු නෙලීමේ කාලය ගැන අවධානය යොමු කරන්න සහ එකම කෘමිනාශක අඛණ්ඩව භාවිතා කිරීමෙන් වළකින්න.</li>
                   <br>
                   <li>අස්වැන්න නෙලීමේදී කෘමිනාශක යොදන විට අස්වනු නෙලීමට පෙර කාලය පිළිබඳව දැනුවත් වන්න.</li>
                   <br>
                   <li>රසායනික මර්දනය
                     <ul>
                       <li>නිර්දේශිත ලෙස නිර්දේශිත කෘෂි රසායන යොදන්න</li>
                     </ul>
                   </li>
                 </ul>'
            ])
          ]);

          Pest::create([
            'pest_name' => 'Leaf-shrinking caterpillar',
            'translatable_pest_name' => 'Test',
            'management' => json_encode([
              'en' => '
              <ul>
                <li>Break up and destroy the tightly packed leaves.</li>
                <br>
                <li>Apply recommended agrochemicals as recommended</li>
                <br>
                <li>Harvest only after at least 7-10 days of applying a recommended insecticide.</li>
              </ul>',
              'ta' => '
              <ul>
              <li>இறுக்கமாக நிரம்பிய இலைகளை உடைத்து அழிக்கவும்.</li>
              <br>
              <li>பரிந்துரைக்கப்பட்ட வேளாண் இரசாயனங்களை பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும்</li>
              <br>
              <li>பரிந்துரைக்கப்பட்ட பூச்சிக்கொல்லியை குறைந்தபட்சம் 7-10 நாட்களுக்குப் பிறகு அறுவடை செய்யுங்கள்.</li>
            </ul>',
              'si' => '
              <ul>
                 <li>තදින් අසුරා ඇති කොළ කඩා විනාශ කරන්න.</li>
                 <br>
                 <li>නිර්දේශිත ලෙස නිර්දේශිත කෘෂි රසායන යොදන්න</li>
                 <br>
                 <li>නිර්දේශිත කෘමි නාශකයක් යෙදීමෙන් අවම වශයෙන් දින 7-10 කට පසුව පමණක් අස්වනු නෙලන්න.</li>
               </ul>'
            ])
          ]);

          Pest::create([
            'pest_name' => 'Leaf aphid',
            'translatable_pest_name' => 'Test',
            'management' => json_encode([
              'en' => '
                <ul>
                  <li>Good crop maintenance and in case of widespread damage, control with a recommended insecticide.</li>
                  <br>
                  <li>Apply recommended agrochemicals as recommended.</li>
                </ul>',
              'ta' => '
              <ul>
                   <li>நல்ல பயிர் பராமரிப்பு மற்றும் பரவலான சேதம் ஏற்பட்டால், பரிந்துரைக்கப்பட்ட பூச்சிக்கொல்லியைக் கொண்டு கட்டுப்படுத்தவும்.</li>
                   <br>
                   <li>பரிந்துரைக்கப்பட்ட வேளாண் இரசாயனங்களை பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும்.</li>
                 </ul>',
              'si' => '
              <ul>
                   <li>හොඳ බෝග නඩත්තු කිරීම සහ පුලුල්ව පැතිරී ඇති හානියකදී, නිර්දේශිත කෘමිනාශකයකින් පාලනය කරන්න.</li>
                   <br>
                   <li>නිර්දේශිත ලෙස නිර්දේශිත කෘෂි රසායන යොදන්න.</li>
                 </ul>'
            ])
          ]);

          Pest::create([
            'pest_Name' => 'Mite damage',
            'translatable_pest_name' => 'Test',
            'management' => json_encode([
              'en' => '
                <ul>
                  <li>Good crop maintenance and adequate irrigation (especially under dry weather conditions); water deficit crops are mo
                    re susceptible to damage.</li>
                  <br>
                  <li>Spray irrigation can reduce the mite population in the crop.</li>
                  <br>
                  <li>If damage spreads, control with a recommended insecticide.</li>
                </ul>',
              'ta' => '
              <ul>
                   <li>நல்ல பயிர் பராமரிப்பு மற்றும் போதுமான நீர்ப்பாசனம் (குறிப்பாக வறண்ட காலநிலையில்); தண்ணீர் பற்றாக்குறை பயிர்கள் மோ
                     மீண்டும் சேதம் அடையும்.</li>
                   <br>
                   <li>தெளிப்பு நீர்ப்பாசனம் பயிரில் பூச்சிகளின் எண்ணிக்கையைக் குறைக்கலாம்.</li>
                   <br>
                   <li>சேதம் பரவினால், பரிந்துரைக்கப்பட்ட பூச்சிக்கொல்லியைக் கொண்டு கட்டுப்படுத்தவும்.</li>
                 </ul>',
              'si' => '
              <ul>
                   <li>හොඳ බෝග නඩත්තුව සහ ප්‍රමාණවත් වාරිමාර්ග (විශේෂයෙන් වියළි කාලගුණික තත්ත්වයන් යටතේ); ජල හිඟ භෝග මෝ
                     හානියට නැවත ගොදුරු වේ.</li>
                   <br>
                   <li>ඉසින වාරිමාර්ග මඟින් බෝගයේ මයිටා ගහනය අඩු කළ හැක.</li>
                   <br>
                   <li>හානි පැතිරෙන්නේ නම්, නිර්දේශිත කෘමිනාශකයකින් පාලනය කරන්න.</li>
                 </ul>'
            ])

          ]);
    }
}
